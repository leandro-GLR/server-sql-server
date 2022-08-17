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
  getAllEmployees: "SELECT * FROM BP_USUARIO",
  getEmployeeById: "SELECT * FROM BP_EMPLEADOS WHERE ID = @id",
  createEmployee:
    "INSERT INTO [dbo].[BP_EMPLEADOS] (ID_EMPRESA,CENTRO_COSTO,RUT_EMPLEADO,NOMBRE_EMPLEADO,RUT_CTA,NOMBRE_CTA,BANCO,TIPO_CTA,N_CTA,CORREO_CTA,COD_BANCO) VALUES ('@companyName,  '@costCenter',  '@rut',  '@fullName',  '@transferRut',  '@transferFullName',  '@bank',  '@accountType',  '@accountNumber',  '@email','@bankCode')",
};

const companiesQueries = {
  getAllCompanies: "SELECT * FROM BP_EMPRESA",
  getCompanyById: "SELECT * FROM BP_EMPRESA WHERE ID_EMPRESA = @ID_EMPRESA",
};

const groupsQueries = {
  getAllGroups: "SELECT * FROM BP_GRUPO",
  getGroupById: "SELECT * FROM BP_GRUPO WHERE ID_GRUPO = @ID_GRUPO",
};

const banksQueries = {
  getBanks: "SELECT * FROM BP_BANCO",
  getBank: "SELECT * FROM BP_BANCO WHERE ID = @id",
  createBank:
    "INSERT INTO BP_BANCO (NOMBRE_BANCO, COD_BANCO) VALUES (@name, @code)",
};

module.exports = {
  querys,
  employeesQueries,
  companiesQueries,
  groupsQueries,
  banksQueries,
};
