const puppeteer = require('puppeteer');
var fs = require ('fs');

var query = `insert into funcionario ( func_cod, func_nome, func_endereco, func_rg, func_cpf, func_estado_civil ) values`;
var values = '';
var id = 0;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.4devs.com.br/gerador_de_pessoas');
  await page.waitForTimeout(3000)
  await clickPessoa(page);
  await browser.close();
})();

async function clickPessoa(page){

    for(i = 0; i < 20; i++ ){
        await page.click('#bt_gerar_pessoa')
        await page.waitForTimeout(3000)
        let element = await page.$('#dados_json')
        let value = await page.evaluate(el => el.textContent, element)
        await formatData(value)
    }

    query += values;

    fs.appendFile('mynewfile1.txt',
    
    query , function (err) {
        if (err) throw err;
        console.log('Saved!');
      }); 
    
}

async function formatData(data){

    let obj = JSON.parse(data);
    console.log(obj.nome);
    id += 1;
    values += ` (${id}, '${obj.nome}', '${obj.endereco}', '${obj.rg}', '${obj.cpf.replace(/[^a-zA-Z0-9 ]/g, "")}', 'solteiro'),`

}
