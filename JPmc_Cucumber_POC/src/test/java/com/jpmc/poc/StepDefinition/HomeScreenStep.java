package com.jpmc.poc.StepDefinition;

import java.util.List;
import java.util.Map;

import com.jpmc.poc.StepLibrary.CommonLibrary;
import com.jpmc.poc.StepLibrary.HomeScreenLibrary;


import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

public class HomeScreenStep {

	@Then("^Customer validate JPMC home screen explore products objects$")
	public void Customer_validate_JPMC_home_screen_explore_products_objects() throws Exception {
		HomeScreenLibrary.jpmc_HomeScreen_ExploreProducts_Validation();
	}
	
	@Then("^Customer validate JPMC home screen images$")
	public void Customer_validate_JPMC_home_screen_images() throws Exception {
		HomeScreenLibrary.jpmc_HomeScreen_ImageValidation();
	}
	
	@Then("^Customer validate JPMC home screen linkTexts$")
	public void Customer_validate_JPMC_home_screen_linkTexts() throws Exception {
		HomeScreenLibrary.jpmc_HomeScreen_LinkTextValidation();
	}
	
	@Then("^Customer Login into the chase dot com$")
	public void Customer_Login_into_the_chase_dot_com(DataTable arg2) throws Exception {
		Map<String, List<String>> dataMap = null;
		dataMap = CommonLibrary.getHorizontalData(arg2);
		HomeScreenLibrary.login(dataMap);
	}
	
	@Then("^Customer search data in chase dot com$")
	public void Customer_search_data_in_chase_dot_com(DataTable arg2) throws Exception {
		Map<String, List<String>> dataMap = null;
		dataMap = CommonLibrary.getHorizontalData(arg2);
		HomeScreenLibrary.search(dataMap);
	}
	
	@Then("^Customer navigate to \"(.*)\" products objects$")
	public void Customer_navigate_to_explore_Product_Page(String para) throws Exception {
		HomeScreenLibrary.navigateTo_ExploreProducts(para);
	}
	
}
