package beans;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import javax.servlet.http.HttpSession;

public class User {
	private String name;
	private String location;
	private String gender;
	private String img;
	private String email;

	public User () {
		
	}
	
	public void populateUser() throws IOException {
		String csvFile = "C:\\Users\\Karl\\git\\WebPL-Project\\WebContent\\database.csv";
		String line;
		String cvsSplitBy = ",";
		try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            while ((line = br.readLine()) != null) {
                // use comma as separator
                String[] userInfo = line.split(cvsSplitBy);
                if (userInfo[0].equalsIgnoreCase(getEmail())) {
                	setName(userInfo[2]);
                	setLocation(userInfo[3]);
                	setGender(userInfo[4]);
                	setImg(userInfo[5]);
                	return;
                }
                
            }

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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	
	
}