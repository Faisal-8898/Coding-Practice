/** Parrot */
public class Parrot {
  String name;
}

class Main {
  public static void main(String[] args) {
    // Parrot p = new Parrot();
    ApplicationContext context = new AnnotationConfigApplicationContext();
    Parrot newP = new Parrot();
  }
}
