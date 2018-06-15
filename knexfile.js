module.exports = {
  development:{
    client: 'pg',
    connection: 'postgres:///g-memory-3'
  },
  production:{
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
  }
}