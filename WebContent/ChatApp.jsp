<!DOCTYPE html>
<html>
	<head>
		<title>Chat</title>
		<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Questrial|Dosis" rel="stylesheet">
	    <link rel="stylesheet" type="text/css" href="style.css">
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
	</head>
	<%@ page language="java" %>
    <%@ page import="beans.User" %>
	
	
	<jsp:useBean id="user" scope="page" class="beans.User" />
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
	
	<script>
    var ngApp = angular.module("myApp", []);
    ngApp.controller("chat-controller", function($scope, $compile) {
        $scope.partner = "";
        console.log("test");
        $scope.self = "<%=userEmail%>";
		console.log("<%=userEmail%>");
        $scope.chats = [["kk4fa@virginia.edu", "Hello"],
        		["vl4kz@virginia.edu", "What's up?"],
        		["kk4fa@virginia.edu", "Not much."],
        		["kk4fa@virginia.edu", "How about you?"]
        ];
        $scope.connect = function(target) {
            $scope.partner = target;
            $scope.refreshChat();
        };
        $scope.send_chat = function(text) {
        	$scope.chats.push([$scope.self, text]);
        	$scope.refreshChat();
        	console.log(text);
        }
		$scope.refreshChat = function() {
			document.getElementById("ChatBox").innerHTML = 
				"<span>"+$scope.partner+"</span></br>";
			document.getElementById("ChatBox").innerHTML +=
				"<div id='InnerChatBox'></div>"
			for(x = 0; x < $scope.chats.length; x++) {
				if($scope.chats[x][0] == $scope.self) {
					document.getElementById("InnerChatBox").innerHTML += 
						"<div class='SentChat'>"+$scope.chats[x][1]+"</div></br>";
				}
				else {
					document.getElementById("InnerChatBox").innerHTML += 
						"<div class='RecdChat'>"+$scope.chats[x][1]+"</div></br>";
				}
			}
			document.getElementById("ChatBox").innerHTML +=
				"<input id='chat_textbox' type='text' ng-model='chat_text'> </br>" +
				"<input id='send_button' type='button' ng-click='send_chat(chat_text)' value='Send' />";
				$compile(document.getElementById("chat_textbox"))($scope);
				$compile(document.getElementById("send_button"))($scope);
		};
        
    });
	</script>
	
	<body ng-app="myApp">
        <div id="TopBar">
            <div>
                <h1>HackMatch</h1>
            </div>
            <nav>
                <p>
                    <a href="index.html">Home</a>
                    <a href="profile.jsp">My Profile</a>
                    <a href="ChatApp.jsp">Chat</a>
                    <a href="LogoutServlet">Logout</a>
                </p>
            </nav>
        </div>
        <div id = "ContentPanel">
            <div id="ChatBox" ng-controller="chat-controller">
            	
		        Hello, {{self}}. Who do you want to chat? </br>
		        <input type="text" ng-model="user_prompt"> </br>
		        <input type="button" ng-click="connect(user_prompt)" value="Match" />    
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