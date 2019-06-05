# projectId: cjwffcf7f1p0r0139e62i4cth
# version: 20

type File @model {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type User @model {
  createdAt: DateTime!
  email: String @isUnique
  id: ID! @isUnique
  password: String
  updatedAt: DateTime!
  name: String!
  nameTwo: String
  lastName: String!
  lastNameTwo: String
  birdDate: DateTime!
  gender: String!
  documentType: Int!
  documentNumber: String!
  phone: Int!
  cellPhone: Int!
  education: String!
  addresses: [Address!]! @relation(name: "UserOnAddress")
  creditRequests: CreditRequests @relation(name: "UserOnCreditRequests")
  currentOcupation: CurrentOcupation @relation(name: "UserOnCurrentOcupation")
  expenses: Expenses @relation(name: "UserOnExpenses")
  pockets: Pockets @relation(name: "UserOnPockets")
}

type Address @model {
  id: ID! @isUnique
  address: String!
  addressDetail1: String
  addressDetail2: String
  country: String!
  city: String!
  user: User @relation(name: "UserOnAddress")
}

type CurrentOcupation @model {
  id: ID! @isUnique
  laboralState: String!
  opupation: String!
  companyName: String
  companyPosition: String
  companyAntique: String
  companyPhone: Int
  incomes: Incomes @relation(name: "CurrentOcupationOnIncomes")
  user: User @relation(name: "UserOnCurrentOcupation")
}

type Expenses @model {
  id: ID! @isUnique
  expenseEducation: Int
  expenseServices: Int
  expenseRent: Int
  expenseAnother: Int
  expenseCreditCard: Int
  extenseInsurance: Int
  extenseTransport: Int
  economicDependents: Int
  totalExtense: Int
  user: User @relation(name: "UserOnExpenses")
}

type Incomes @model {
  id: ID! @isUnique
  incomeWork: Int!
  incomeAnotHer: Int!
  totalIncome: Int
  currentOcupation: CurrentOcupation @relation(name: "CurrentOcupationOnIncomes")
}

type CreditRequests @model {
  id: ID! @isUnique
  creditValue: Int!
  createdAt: DateTime!
  monthlyPayment: DateTime!
  monthlyEarnings: DateTime!
  totalEarnings: Int!
  creditStates: CreditStates @relation(name: "CreditRequestsOnCreditStates")
  paymentHistoys: [PaymentHistoy!]! @relation(name: "CreditRequestsOnPaymentHistoy")
  user: User @relation(name: "UserOnCreditRequests")
}

type CreditStates @model {
  id: ID! @isUnique
  state: Int!
  aprobedBy: String!
  creditRequests: CreditRequests @relation(name: "CreditRequestsOnCreditStates")
}

type Pockets @model {
  id: ID! @isUnique
  totalSaldo: Int!
  totalIncomesGlobal: Int!
  totalIncomesMontly: Int!
  currentMoneyLoan: Int!
  user: User @relation(name: "UserOnPockets")
}

type PaymentHistoy @model {
  id: ID! @isUnique
  dateMonthlyPay: DateTime!
  dateSpectedPay: DateTime!
  dateRealizedPay: DateTime!
  arrearsTime: DateTime!
  defaultInterests: DateTime!
  creditRequests: CreditRequests @relation(name: "CreditRequestsOnPaymentHistoy")
}