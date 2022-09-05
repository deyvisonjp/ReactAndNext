# Curso Udemy - React

## O babel é um transpilador JavaScript
Quando você tem um código ES2015, que é a versão atual de JavaScript, 
deve utilizar o transpilador para converter o código novo e gerar, assim, um novo código em ES5, que é uma versão antiga do JavaScript.
[Conteúdo interessante](https://blog.matheuscastiglioni.com.br/como-funciona-a-transpilacao-de-codigo-do-babel/)

## WebPack
WebPack é um empacotador de módulos criado para agrupar arquivos JavaScript que estão sendo usados em um navegador. 
Uma funcionalidade importante é transformar, agrupar ou empacotar qualquer recurso. Eles são direcionados para um gráfico de dependência. 
Portanto, o desenvolvedor consegue usar o código-fonte para selecionar os arquivos desejados e decidir como irá processá-los.
![WebPack](https://miro.medium.com/max/1400/1*iBITv3YhdY85BbWfKRkjbA.png)

## Métodos de ciclo de vida
- componentDidMount() {}
  - É invocado imediatamente após um componente ser montado
- componentDidUpdate() {}
  - É invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.
  - Excelente para checar se ocorreu alguma mudança logo de cara no estado da aplicação.
- componentWillUnmount() {}
  - É invocado imediatamente antes que um componente seja desmontado e destruído

