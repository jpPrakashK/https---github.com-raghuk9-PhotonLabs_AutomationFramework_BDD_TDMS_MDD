package com.jpmc.poc.StepDefinition;

import com.jpmc.poc.StepLibrary.CheckingScreenLibrary;
import cucumber.api.java.en.Then;

public class CheckingScreenSteps {

	@Then("^Customer validate checking screen objects$")
	public void Customer_validate_checking_screen_objects() throws Exception {
		CheckingScreenLibrary.checkingScreen_Validation();
	}
	
	
}
