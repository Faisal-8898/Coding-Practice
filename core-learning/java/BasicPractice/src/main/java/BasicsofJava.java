import java.util.*;

public class BasicsofJava {
    public static void main(String[] args){
        String[] wordListOne = {"agnostid", "opinionate", "voice Activate", "agent based", "functional"};
        String[] wordListTwo = {"loosly coupled", "six sigma", "asyncronus"};

        int oneLength = wordListOne.length;
        int twoLength =  wordListTwo.length;

        Random randomGenerator = new Random();
        int rand1 = randomGenerator.nextInt(oneLength);
        int rand2 = randomGenerator.nextInt(twoLength);
        String phrase = wordListOne[rand1] + " " + wordListTwo[rand2];

        System.out.println(phrase);
        System.out.println(oneLength);
        System.out.println(rand1);
        System.out.print("what we need now is " + phrase);
    }
}
