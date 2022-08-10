const querys = {
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};

const employeesQueries = {
  getAllEmployees: "SELECT * FROM BP_EMPLEADOS",
  getEmployeeById: "SELECT * FROM BP_EMPLEADOS WHERE ID = @id",
  addNewEmployee: "INSERT INTO ",
};

module.exports = {
  querys,
  employeesQueries,
};
