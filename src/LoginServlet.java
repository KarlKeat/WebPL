
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
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
    /**
     * Default constructor. 
     */
    public LoginServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		// want to check database here

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
          String query = "SELECT password, username FROM USER_DATA WHERE email = '" + email + "'";
          System.out.println(query);
          rs = stmt.executeQuery(query);                    
         		
          // Extract data from result set
          while (rs.next())
          {
             // Retrieve by column name
             String correctPass  = rs.getString("password");
             String userName  = rs.getString("username");

             
             if (correctPass.equals(password)) {
	             out.print("Welcome, " + userName);
	             HttpSession session = request.getSession(true);
	             session.setAttribute("email", email);
	             request.getRequestDispatcher("profile.jsp").include(request, response);  
             }
             else {
	             out.print("Wrong username or password. \n Please try again.");  
	             request.getRequestDispatcher("login.html").include(request, response);  
             }
         out.close();
             
          }	   
                  
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
           
        } // end try

       /*
        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {

            while ((line = br.readLine()) != null) {

                // use comma as separator
                String[] userInfo = line.split(cvsSplitBy);

                if (userInfo[0].equalsIgnoreCase(email) && userInfo[1].equals(password)) {
                	out.print("Welcome, " + userInfo[0]);
                    HttpSession session = request.getSession(true);
                    session.setAttribute("email", email);
                    request.getRequestDispatcher("profile.jsp").include(request, response);  
                }
                else {
                    out.print("Wrong username or password. \n Please try again.");  
                    request.getRequestDispatcher("login.html").include(request, response);  
                }
                out.close();
            }

        }*/
	}
}
