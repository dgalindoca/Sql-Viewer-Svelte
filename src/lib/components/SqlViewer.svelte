<script>
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';
  
    export let showExtended;
    let diagramText = `   erDiagram
    Categories { 
        INTEGER CategoryID PK 
        TEXT CategoryName  
        TEXT Description  
    }
    Customers { 
        INTEGER CustomerID PK 
        TEXT CustomerName  
        TEXT ContactName  
        TEXT Address  
        TEXT City  
        TEXT PostalCode  
        TEXT Country  
    }
    Employees { 
        INTEGER EmployeeID PK 
        TEXT LastName  
        TEXT FirstName  
        DATE BirthDate  
        TEXT Photo  
        TEXT Notes  
    }
    Shippers { 
        INTEGER ShipperID PK 
        TEXT ShipperName  
        TEXT Phone  
    }
    Suppliers { 
        INTEGER SupplierID PK 
        TEXT SupplierName  
        TEXT ContactName  
        TEXT Address  
        TEXT City  
        TEXT PostalCode  
        TEXT Country  
        TEXT Phone  
    }
    Products { 
        INTEGER ProductID PK 
        TEXT ProductName  
        INTEGER SupplierID FK  
        INTEGER CategoryID FK  
        TEXT Unit  
        NUMERIC Price  "Contraints Extra: DEFAULT 0"
    }
    Orders { 
        INTEGER OrderID PK 
        INTEGER CustomerID FK  
        INTEGER EmployeeID FK  
        DATETIME OrderDate  
        INTEGER ShipperID FK  
    }
    OrderDetails { 
        INTEGER OrderDetailID PK 
        INTEGER OrderID FK  
        INTEGER ProductID FK  
        INTEGER Quantity  
    }
    Categories ||--o{ Products : ""
    Suppliers ||--o{ Products : ""
    Categories ||--o{ Products : ""
    Suppliers ||--o{ Products : ""
    Employees ||--o{ Orders : ""
    Customers ||--o{ Orders : ""
    Shippers ||--o{ Orders : ""
    Employees ||--o{ Orders : ""
    Customers ||--o{ Orders : ""
    Shippers ||--o{ Orders : ""
    Orders ||--o{ OrderDetails : ""
    Products ||--o{ OrderDetails : ""
    Orders ||--o{ OrderDetails : ""
    Products ||--o{ OrderDetails : ""
      `;
    
    function toggleStyle() {
      showExtended = !showExtended;
    }
  
    onMount(() => {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    });
  
    $: if (diagramText) {
      mermaid.contentLoaded();
    }
  </script>
  
  <style>
    .mermaid {
      margin-top: 20px;
    }

    .viewer-container{
      
      background-color: #E3F2FD; 
      border: 1px solid #BBDEFB; 

      border-radius: 8px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
      position: absolute;
      top: 190px;
      left: 660px;
      width: 600px;
      height: 395px;
      border-radius: 12px;
    }
    .button2{
      position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #322981;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    
  </style>
  
  <div class="viewer-container">
    <div class="mermaid">{diagramText}</div>
    {#if !showExtended}
    <button class="button2" on:click={toggleStyle}>
      Expandir
    </button>
    {/if}
  </div>
  