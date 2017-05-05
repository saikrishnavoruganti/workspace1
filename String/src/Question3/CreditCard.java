package Question3;

import java.util.Scanner;

public class CreditCard {
	
		
		    public static void main(String[] args) {
		
		        long number = 4388576018410707l;
		
		        int sum1 = getSumOfEvenNumbers( number);
		
		        int sum2 = getSumOfOddNumbers( number);
		
		        if((sum1+sum2)%10==0){
		
		            System.out.println("Valid!");
		
		        } else {
		
		            System.out.println("Invalid!");
		
		        }
		
		    }
		
		     
		
		    public static int getSumOfEvenNumbers(long number){
		
		        String n =  String.valueOf(number);
		
		        int sum = 0;
		
		        Integer curNumber = 0;
		
		        for(int x = n.length() - 1; x >= 0;x--){
		
		            if(x%2==0){
		
		                curNumber = Integer.parseInt(((Character)n.charAt(x)).toString()) * 2;
		
		                while(curNumber.toString().length()>1){
		
		                    curNumber = Integer.parseInt(((Character)curNumber.toString().charAt(0)).toString()) + Integer.parseInt(((Character)curNumber.toString().charAt(1)).toString());
		
		                }
		
		                sum = sum + curNumber;
		
		           }
		
		        }
		
		        return sum;
		
		    }
		
		     
		
		    public static int getSumOfOddNumbers(long number){
		
		        String n =  String.valueOf(number);
		
		        int sum = 0;
		
		        Integer curNumber = 0;
		
		        for(int x = n.length() - 1; x >= 0;x--){
		
		            if(x%2!=0){
		
		                curNumber = Integer.parseInt(((Character)n.charAt(x)).toString());
		
		                sum = sum + curNumber;
		
		            }
		
		        }
		
		        return sum;
		
		    }		
		}


