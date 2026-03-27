@login @smoke
Feature: Autenticación de Usuarios

  Background:
    Given El usuario navega a la pagina de inicio de sesion

  Scenario Outline: Inicio de sesion con diferentes tipos de usuarios
    When El usuario ingresa el nombre de usuario "<usuario>" y la contraseña "<password>"
    And Hace clic en el boton de login
    Then El usuario deberia ser redirigido a la pagina de productos

    Examples:
      | usuario                | password     |
      | standard_user          | secret_sauce |
      | problem_user           | secret_sauce |
      | performance_glitch_user| secret_sauce |

  Scenario: Intento de inicio de sesion con usuario bloqueado
    When El usuario ingresa el nombre de usuario "locked_out_user" y la contraseña "secret_sauce"
    And Hace clic en el boton de login
    Then Deberia visualizarse el mensaje de error "Epic sadface: Sorry, this user has been locked out."

  Scenario: Intento de inicio de sesion con credenciales invalidas
    When El usuario ingresa el nombre de usuario "user_not_exist" y la contraseña "wrong_pass"
    And Hace clic en el boton de login
    Then Deberia visualizarse el mensaje de error "Epic sadface: Username and password do not match any user in this service"