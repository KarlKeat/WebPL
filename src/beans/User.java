package beans;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.http.HttpSession;

public class User {
	private String name;
	private String favLang;
	private String gender;
	private String email;
	private byte[] imgdata;

	public String getFavLang() {
		return favLang;
	}

	public void setFavLang(String favLang) {
		this.favLang = favLang;
	}

	public byte[] getImgdata() {
		return imgdata;
	}

	public void setImgdata(byte[] imgdata) {
		this.imgdata = imgdata;
	}

	public User () {
		
	}
	
	// JDBC driver name and database URL
    final static String JDBC_DRIVER = "com.mysql.jdbc.Driver";  

    // database name = web4640
    //   Note: Looking in the wrong database and/or wrong table may results in either 
    //         cannot connect to the database, not find table, or no result set. 
    //         Thus, make sure specify the correct database name
    // post to mySQL Database = 3308  (default port in XAMPP is 3306)
    final static String DB_URL = "jdbc:mysql://localhost:3306/hackmatch";    
   
    //  Database credentials
    final static String USER = "vl4kz";
    final static String PWD = "cs4640";
	
	public void populateUser() {


       ResultSet rs = null;
       Statement stmt = null;
       Connection conn = null;
       
       String msg = "";      // feedback indicating whether the query is successful
       
       try 
       {
          // Register JDBC driver
          Class.forName(JDBC_DRIVER);
          // System.out.println("MySQL JDBC Driver Registered");
 	          
          // Open a connection
          conn = DriverManager.getConnection(DB_URL, USER, PWD);
          // System.out.println("Connection established");
 	   
          // Execute SQL query
          stmt = conn.createStatement();
          String query = "SELECT * FROM USER_DATA WHERE email = '" + email + "'";
          System.out.println(query);
          System.out.println("HELLO");
          rs = stmt.executeQuery(query);  
          rs.next();
          // Extract data from result set
          name = rs.getString("username");
          gender = rs.getString("gender");
          favLang = rs.getString("pLanguages");
          imgdata = rs.getBytes("profileImage");
                  
          // Clean-up environment
          if (rs != null)
             rs.close();         
          stmt.close();
          conn.close();
          // System.out.println("close database");
                 
          Driver driver = null;
          java.sql.DriverManager.deregisterDriver(driver);         
          // System.out.println("deregister driver");
          
       } catch (SQLException se) {
          se.printStackTrace();       // handle errors for JDBC
       } catch (Exception e) {            
          e.printStackTrace();        // handle errors for Class.forName
       } finally {
           // finally block used to close resources
           try {
              if (stmt != null)
                 stmt.close();

              Driver driver = null;
              java.sql.DriverManager.deregisterDriver(driver);

           } catch (SQLException se2) {
      	 // nothing we can do
           }             
           try
           {
              if (conn != null)
                 conn.close();

              Driver driver = null;
              java.sql.DriverManager.deregisterDriver(driver);

           } catch (SQLException se) {
              se.printStackTrace();
           } // end finally try   
           
        }
		
	}
 
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
}