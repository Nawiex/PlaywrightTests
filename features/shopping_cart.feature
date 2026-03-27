@cart
Feature: Gestion del Carrito de Compras

  Background:
    Given El usuario ha iniciado sesion con "standard_user" y "secret_sauce"

  Scenario: Agregar un producto exitosamente al carrito
    When El usuario agrega el producto "Sauce Labs Backpack" al carrito
    Then El icono del carrito deberia mostrar "1" producto añadido

  Scenario: Verificar que los productos seleccionados esten visibles en el carrito
    Given El usuario ha agregado "Sauce Labs Bike Light" al carrito
    When El usuario abre el carrito de compras
    Then El producto "Sauce Labs Bike Light" deberia estar presente en la lista
    And La cantidad del producto deberia ser "1"