import java.util.Deque;
import java.util.Stack;

public class StackLearn {
  public static void main(String[] args) {
    Stack<Integer> stack = new Stack<>();
    Stack<Integer> tIsStack = new Stack<>();
    Stack<Integer> wLove = new Stack<>();
    Stack<Integer> hTack = new Stack<>();

    Deque<Integer> bapofq = new Stack<>();

    // Push element to stack
    stack.push(34);
    stack.push(12);
    stack.push(23);
    stack.push(89);

    System.out.println(stack.peek());
    System.out.println(stack.pop());
    System.out.println(stack.peek());
    System.out.println(stack.pop());
    System.out.println(stack.pop());
    System.out.println(stack.pop());
    System.out.println(stack.isEmpty());
  }
}
