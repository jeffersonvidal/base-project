import knex from 'knex';
import path from 'path';

/** Conexão com o banco de dados */
const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  }
});

/** Exporta dados da conexão para toda aplicação */
export default connection;

/** Migrations - cria e exlcui tabelas 
 * A ordem de criação dos arquivos na pasta migration
 * é a ordem de execução dos scripts
*/