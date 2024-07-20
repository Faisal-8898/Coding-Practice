import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

class sumThread extends Thread {}

public class Basic {
  public static void printSingleRowStars(int n) {
    String str = "";
    for (int i = 0; i < n; i++) {
      str = str + "*";
    }
    System.out.println(str);
  }

  public static void count(Long n) {
    Long sum = 1L;
    for (Long i = 1L; i < n; i++) {
      sum += i;
    }
    System.out.println(sum);
  }

  public static void main(String[] args) {
    // int[] myArray;
    // myArray = new int[10];
    //
    // int[] myArray2 = {1, 2, 3, 4};
    //
    // String[] myString = {"hello", "itsme"};
    //
    // int[] numberr = new int[10];
    // Arrays.fill(numberr, 0);
    //
    // for (int i = 0; i < 10; i++) {
    //  System.out.println(numberr[i]);
    // }

    // printSingleRowStars(10);
    // count(4000000000L / 2);
    // count(4000000000L / 2);
    // count(4000000000L / 2);
    // count(4000000000L / 2);
    // count(4000000000L / 2);
    // count(4000000000L / 2);
    // count(4000000000L / 2);

    long n = 4000000000L / 2;
    int numThreads = 4;
    ExecutorService executor =
        Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());

    System.out.println(executor);
    for (int i = 0; i < 7; i++) {
      executor.submit(() -> count(1000000000L / 2));
      System.out.println(executor);
    }

    executor.shutdown();

    try {
      executor.awaitTermination(Long.MAX_VALUE, TimeUnit.NANOSECONDS);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
}
