import java.util.*;

public class Basic {
  public static void main(String[] args) {
    int[] myArray;
    myArray = new int[10];

    int[] myArray2 = {1, 2, 3, 4};

    String[] myString = {"hello", "itsme"};

    int[] numberr = new int[10];
    Arrays.fill(numberr, 0);

    for (int i = 0; i < 10; i++) {
      System.out.println(numberr[i]);
    }
  }
}
