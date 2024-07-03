const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
      <p className="text-lg mb-4">Tem alguma pergunta ou quer saber mais sobre nossas soluções? Fale conosco!</p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left mb-2">Nome</label>
          <input type="text" id="name" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-left mb-2">Mensagem</label>
          <textarea id="message" className="w-full px-3 py-2 border rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Enviar</button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Informações de Contato</h2>
        <p className="text-lg">Endereço: Rua Exemplo, 123, Cidade, Estado</p>
        <p className="text-lg">Telefone: (11) 1234-5678</p>
        <p className="text-lg">Email: contato@sigo.com</p>
      </div>
    </div>
  );
};

export default Contact;