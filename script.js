const contatos = [
  {
    nome: "Maxwell Wright",
    telefone: "0191 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    nome: "Raja Villarreal",
    telefone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    nome: "Helen Richards",
    telefone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

//push
contatos.push({
  nome: "Maisie Haley",
  telefone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
});

//exibir
console.log(contatos);

//primeiro contato
const primeiroContato = contatos[0];
console.log(`${primeiroContato.nome} / ${primeiroContato.telefone} / ${primeiroContato.email}`);

// último contato
const ultimoContato = contatos[contatos.length - 1];
console.log(`${ultimoContato.nome} / ${ultimoContato.telefone} / ${ultimoContato.email}`);