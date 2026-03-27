@checkout @critical
Feature: Proceso de Checkout y Compra

  Background:
    Given El usuario ha iniciado sesion con "standard_user" y "secret_sauce"
    And Tiene los productos "Sauce Labs Backpack" y "Sauce Labs Bolt T-Shirt" en el carrito

  Scenario: Finalizacion de compra exitosa
    Given El usuario se encuentra en la pantalla del carrito
    When Hace clic en el boton de Checkout
    And Completa el formulario con los datos: "Carlos", "Aranibar" y "04001"
    And Hace clic en el boton de Continuar
    And Revisa el resumen y hace clic en el boton de Finalizar
    Then El sistema deberia mostrar la confirmacion "Thank you for your order!"
    And El carrito deberia quedar vacio