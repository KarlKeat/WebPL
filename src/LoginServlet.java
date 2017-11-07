
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

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
		
		// want to check database here -- currently holding the place with a csv file
        String csvFile = "C:\\Users\\Karl\\git\\WebPL-Project\\WebContent\\database.csv";
        String line = "";
        String cvsSplitBy = ",";

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

        }
	}
}
