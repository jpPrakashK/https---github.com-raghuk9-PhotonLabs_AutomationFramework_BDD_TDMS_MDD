package com.jpmc.poc.StepDefinition;

import com.jpmc.poc.StepLibrary.CreditcardScreenLibrary;
import cucumber.api.java.en.Then;

public class CreditcardsScreenSteps {

	@Then("^Customer validate credit card screen objects$")
	public void Customer_validate_credit_card_screen_objects() throws Exception {
		CreditcardScreenLibrary.creditcardScreen_Validation();
	}
	
	
}
