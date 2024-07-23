/** Parrot */
public class Parrot {
  String name;

  @Override
  public String toString() {
    return "Parrot: " + name;
  }
}

public class Person {
  String name;
  Parrot parrot;
}

@Configuration
public class ProjectConfiguration {

  @Bean
  @Scope(BeanDefinition.SCOPE_PROTOTYPE)
  public Parrot parrot() {
    Parror p = new Parrot();
    p.name = "pappu";
    return p;
  }

  @Bean
  public Person persion() {
    Person p = new person();
    p.name = "Faisal";
    p.parrot(parrot());
    return p;
  }
}

@Configuration
public class nextConfig {
  @Bean
  public CommentService commentService() {
    return new CommentService();
  }
}

public class CommentService {
  String name;
}

class Main {
  public static void main(String[] args) {
    // Parrot p = new Parrot();
    ApplicationContext context = new AnnotationConfigApplicationContext(ProjectConfiguration.class);
    ApplicationContext appContext = new AnnotationConfigApplicationContext(nextConfig.class);
    var cs1 = appContext.getBean("commentService", CommentService.class);
    Person person = context.getBean(Person.class);
    Parrot parrot = context.getBean(Parrot.class);
    System.out.println("Person: " + person.name);
    System.out.println("Parrot: " + parrot.name);
    System.out.println("Person's parrot: " + person.parrot);
  }
}
