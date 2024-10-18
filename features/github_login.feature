Feature: GitHub Login
  As a GitHub user
  I want to be able to log into my account
  So that I can access my repositories, issues, and personal settings

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the GitHub login page
    When I enter an invalid username "invaliduser" and password "invalidpassword"
    And I click on the Sign in button
    Then I should see an error message "Incorrect username or password."

  Scenario: Valid username with invalid password
    Given I am on the GitHub login page
    When I enter username "ZainabEman" with password "wrongpassword"
    Then I should see the error message "Incorrect username or password."
    And I take a screenshot named "valid_username_invalid_password.png"

  Scenario: Password field left empty
    Given I am on the GitHub login page
    When I enter username "ZainabEman" with no password
    Then I should see the login screen
    And I take a screenshot named "empty_password_field.png"

  Scenario: Invalid credentials
    Given I am on the GitHub login page
    When I enter invalid credentials "zainab" with "zainab123456"
    Then I should see the error message "Incorrect username or password."
    And I take a screenshot named "error_message.png"

  Scenario: Valid credentials
    Given I am on the GitHub login page
    When I enter valid credentials "ZainabEman" with "zainab1810200318102003"
    Then I should see the "Dashboard"
    And I take a screenshot named "valid_login_dashboard.png"

