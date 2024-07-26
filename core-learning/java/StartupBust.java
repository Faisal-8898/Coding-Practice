import java.util.ArrayList;

class Startup {
  private String name;
  private ArrayList<String> locations;

  public void setName(String name) {
    this.name = name;
  }

  public void setLocationCells(ArrayList locationCells) {
    locations = locationCells;
  }
}

class GameHelper {
  public ArrayList<String> placeStartup(int n) {
    int randNum = (int) (Math.random());
    ArrayList<String> singleLocationCells;
    return singleLocationCells;
  }
}

public class StartupBust {
  private GameHelper helper = new GameHelper();
  private ArrayList<Startup> startups = new ArrayList<Startup>();
  private int numberOfGuesses = 0;

  private void setUpGame() {
    Startup one = new Startup();
    one.setName("poniez");
    Startup two = new Startup();
    two.setName("trelet");
    Startup three = new Startup();
    three.setName("waro");

    startups.add(one);
    startups.add(two);
    startups.add(three);

    System.out.println("Your Goal is to sink Three Starups");
    System.out.println("poniez, trelet, waro");
    System.out.println("try to sink them all in few number of guesses");

    for (Startup startup : startups) {
      ArrayList<String> newLocations = helper.placeStartup(3);
      startup.setLocationCells(newLocations);
    }
  }
}
