<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Match!</title>
  <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Questrial|Dosis" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script type="text/javascript" src="match.js"></script>
</head>
	<%@ page language="java" %>
    <%@ page import="beans.User" %>
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
	%>
	
<body onload="setFocus()">
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
          <h2>Find Your Match!</h2>
		<div id="UserProfile">
              <p><span id="txtHint"></span></p>              
            </div>
  <center><button class="largebutton" onclick="showMatch()">Generate New Match</button></center>
  

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