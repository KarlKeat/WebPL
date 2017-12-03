<!DOCTYPE HTML>
<html>
    <head>
        <title>HackMatch</title>
        <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Questrial|Dosis" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="cookieManager.js"></script>
        <script type="text/javascript" src="registration.js"></script>
    </head>
    <%@ page language="java" %>
    <%@ page import="beans.User" %>
    <%@ page import="java.util.Base64" %>
	<%@ page session="true" %>
	
	<jsp:useBean id="user" scope="session" class="beans.User" />
	<%
		String userEmail = (String)session.getAttribute("email");
	%>
	<jsp:setProperty name="user" property="email" value="<%=userEmail%>" />
	<% if(userEmail == null) {%>
		<jsp:forward page="login.html" />
	<%
	}
		user.populateUser();
		byte[] imgdata = user.getImgdata();
		System.out.println(user.getFavLang());
		String encode = Base64.getEncoder().encodeToString(imgdata);
	%>
	
    <body onload="onLoad(); ">
        <div id="TopBar">
            <div>
                <h1>HackMatch</h1>
            </div>
            <nav>
                <p>
                    <a href="index.jsp">Home</a>
                    <a href="profile.jsp">My Profile</a>
                    <a href="ChatApp.jsp">Chat</a>
                    <a href="match.jsp">Match</a>
                    <a href="LogoutServlet">Logout</a>
                </p>
            </nav>
        </div>
        <div id = "ContentPanel">
            <div id="UserProfile">
		        <div>
		            <img src="data:image/jpeg;base64,<%=encode %>" class="profilePicLarge"> 
		        </div>
		        <div>
		            <h3><jsp:getProperty name="user" property="name"/></h3>
		            <h4><jsp:getProperty name="user" property="favLang"/></h4>
		            <p><jsp:getProperty name="user" property="gender"/></p>
		        </div>               
            </div>
            <footer id="AuthorContact">
                <p>Created by: Karl Keat and Victoria Li</p>
                <p>Contact information:
                    <a href="mailto:vl4kz@virginia.edu">
                    vl4kz@virginia.edu</a> or <a href="mailto:kkf4a@virginia.edu">
                    kkf4a@virginia.edu</a>
                </p>
            </footer>
        </div>
    </body>
</html>
