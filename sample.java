import java.io.*;
import java.util.*;

/* Keyboard integar reader function*/
public class KeyboardIntegerReader {

	public static void main ( String[] args ) throws java.io.IOException {
  		
  		String s1;
  		String s2;
  		
  		int num = 0;

  		// set up the buffered reader to read from the keyboard
  		BufferedReader br 	= new BufferedReader ( new InputStreamReader ( System.in ) );
  		boolean cont 		= true;

  		while (cont) 
  		{
      		System.out.print ("Enter an integer:");
      		
      		s1 					= br.readLine();
      		StringTokenizer st 	= new StringTokenizer (s1);
      		s2 					= "";

      		while (cont && st.hasMoreTokens())
      		{
          		
          		try{
           			s2 		= st.nextToken();
           			num 	= Integer.parseInt(s2);
           			cont 	= false;
          		}
          		catch (NumberFormatException n)
          		{
           			System.out.println("The value in \"" + s2 + "\" is not an integer");		// Print its not an interger
          		}

			}

     	}

  		System.out.println ("You entered the integer: " + num);									// tell what integar is entered
 
 	}
}