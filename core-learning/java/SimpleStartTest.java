import java.util.Scanner;
import java.util.ArrayList;

class SimpleStart {
  private ArrayList<Integer> locations;
  public int numberOfHits = 0;

  public void setLocationCells(ArrayList<Integer> locs) {
    locations = locs;
  }

  public String checkYourSelf(int guess) {
    String result = "Miss";
    int indexOfGuess = locations.indexOf(guess);
    for (int digit : locations) {
      if (guess == digit) {
        numberOfHits++;
        result = "Hit";
        locations.remove(guess);
      }
      break;
    }
    if (locations.isEmpty()) {
      result = "Killed";
    }
    System.out.println(result);
    return result;
  }
}

/** SimpleStartTest */
public class SimpleStartTest {

  public static void main(String[] args) {
    SimpleStart game = new SimpleStart();

    int randomNum = (int) (Math.random() * 5);
    // Math.random() produces random number between 0 and 1
    ArrayList<Integer> locationsCell = new ArrayList<Integer>();
    locationsCell.add(randomNum);
    locationsCell.add(randomNum + 1);
    locationsCell.add(randomNum + 2);
    game.setLocationCells(locationsCell);
    Scanner sc = new Scanner(System.in);
    while (true) {
      int n = sc.nextInt();
      String result = game.checkYourSelf(n);
      if (result == "Killed") {
        System.out.println("You completed the game and it took : " + game.numberOfHits);
        break;
      }
    }
    sc.close();
  }
}
