import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  public pacientes:any = {} ;
   pacientesBD = [
    {nome: "Thaddeus", cpf: "18936544599", endereco: "P.O. Box 778, 9425 Ac Avenue", telefone: "3695-0734", sexo: "feminino", idade: 64},
    {nome: "Patrick", cpf: "15359286799", endereco: "5397 Orci. St.", telefone: "1058-4428", sexo: "feminino", idade: 56},
    {nome: "Heather", cpf: "63999334599", endereco: "9357 Et, Av.", telefone: "7131-2058", sexo: "masculino", idade: 54},
    {nome: "Blythe", cpf: "85641958699", endereco: "P.O. Box 571, 7107 Turpis Rd.", telefone: "5309-2814", sexo: "feminino", idade: 25},
    {nome: "Halee", cpf: "60275207699", endereco: "972-7104 Inceptos St.", telefone: "6792-6281", sexo: "feminino", idade: 65},
    {nome: "Orlando", cpf: "56477049399", endereco: "940-6193 Dui. Rd.", telefone: "8904-0893", sexo: "masculino", idade: 49},
    {nome: "Gage", cpf: "77670431899", endereco: "225-9899 Vestibulum Road", telefone: "9067-2869", sexo: "feminino", idade: 39},
    {nome: "Sade", cpf: "74466468699", endereco: "P.O. Box 852, 4763 Vulputate Rd.", telefone: "9667-6018", sexo: "feminino", idade: 59},
    {nome: "Blaine", cpf: "69503522099", endereco: "207-220 Non Avenue", telefone: "2660-8551", sexo: "feminino", idade: 57},
    {nome: "Carson", cpf: "81480893499", endereco: "6655 Ipsum Street", telefone: "0727-4267", sexo: "masculino", idade: 55},
    {nome: "Rebecca", cpf: "14242227099", endereco: "P.O. Box 684, 7434 Ut Street", telefone: "9603-2396", sexo: "masculino", idade: 47},
    {nome: "Herman", cpf: "70643981599", endereco: "3121 Et Ave", telefone: "5023-5277", sexo: "masculino", idade: 47},
    {nome: "Germane", cpf: "65431065299", endereco: "Ap #986-1998 Hendrerit Av.", telefone: "2320-2223", sexo: "feminino", idade: 52},
    {nome: "Winter", cpf: "91580678899", endereco: "P.O. Box 213, 7818 Facilisi. Av.", telefone: "6305-4827", sexo: "masculino", idade: 17},
    {nome: "Ramona", cpf: "80551230299", endereco: "744-3050 Nec, Ave", telefone: "6316-4029", sexo: "masculino", idade: 23},
    {nome: "Clinton", cpf: "74268201699", endereco: "821-7667 Sit St.", telefone: "0842-0523", sexo: "feminino", idade: 25},
    {nome: "Karleigh", cpf: "30298712499", endereco: "P.O. Box 789, 3626 Purus, Road", telefone: "9465-6957", sexo: "feminino", idade: 37},
    {nome: "Joel", cpf: "68429122499", endereco: "5828 Velit. Street", telefone: "7228-4415", sexo: "masculino", idade: 38},
    {nome: "Aquila", cpf: "35987643999", endereco: "Ap #674-2820 Risus, Rd.", telefone: "2302-7131", sexo: "masculino", idade: 24},
    {nome: "Stone", cpf: "04937355799", endereco: "P.O. Box 954, 3656 In, St.", telefone: "3525-4849", sexo: "masculino", idade: 37},
    {nome: "Henry", cpf: "50772645499", endereco: "P.O. Box 780, 2528 Enim Rd.", telefone: "0844-3800", sexo: "masculino", idade: 52},
    {nome: "Ivana", cpf: "59463367199", endereco: "8187 Purus, Avenue", telefone: "7042-0134", sexo: "masculino", idade: 40},
    {nome: "Cole", cpf: "59520556199", endereco: "Ap #367-5020 Dolor St.", telefone: "7726-9068", sexo: "feminino", idade: 16},
    {nome: "Dean", cpf: "52290053199", endereco: "Ap #647-9415 Interdum. Rd.", telefone: "4364-9679", sexo: "feminino", idade: 57},
    {nome: "Lucian", cpf: "93965524099", endereco: "P.O. Box 104, 9460 Ornare Street", telefone: "4282-5742", sexo: "masculino", idade: 49},
    {nome: "Owen", cpf: "18390091599", endereco: "258-7014 Fusce Rd.", telefone: "6343-1949", sexo: "masculino", idade: 41},
    {nome: "Declan", cpf: "42743097099", endereco: "P.O. Box 827, 7211 Nec, Road", telefone: "1242-9415", sexo: "masculino", idade: 50},
    {nome: "Quinlan", cpf: "13468583899", endereco: "885-3677 Aliquam Avenue", telefone: "5263-7679", sexo: "masculino", idade: 37},
    {nome: "Hedy", cpf: "15788661799", endereco: "626-1029 Est Av.", telefone: "5979-4604", sexo: "feminino", idade: 52},
    {nome: "Kendall", cpf: "95736664699", endereco: "P.O. Box 686, 1235 Dictum Avenue", telefone: "8683-6340", sexo: "masculino", idade: 54},
    {nome: "Paula", cpf: "67859202199", endereco: "355-6146 Et, Street", telefone: "0555-1394", sexo: "masculino", idade: 41},
    {nome: "Veda", cpf: "80814975599", endereco: "P.O. Box 952, 1700 Phasellus Street", telefone: "9954-0102", sexo: "masculino", idade: 50},
    {nome: "Ulric", cpf: "43480173999", endereco: "P.O. Box 436, 8263 Lectus, St.", telefone: "4725-7264", sexo: "feminino", idade: 27},
    {nome: "Hop", cpf: "10558390599", endereco: "Ap #254-3179 Suspendisse Street", telefone: "4957-8080", sexo: "feminino", idade: 29},
    {nome: "Abraham", cpf: "67336269199", endereco: "8465 Tincidunt Street", telefone: "2443-3145", sexo: "feminino", idade: 63},
    {nome: "Kamal", cpf: "57868694899", endereco: "8889 Cursus Rd.", telefone: "8195-4828", sexo: "masculino", idade: 51},
    {nome: "Wyoming", cpf: "50642718299", endereco: "Ap #303-2654 A Road", telefone: "6820-1206", sexo: "feminino", idade: 65},
    {nome: "Wesley", cpf: "46211591099", endereco: "608-7968 Molestie St.", telefone: "2639-6384", sexo: "masculino", idade: 44},
    {nome: "Rachel", cpf: "58893525099", endereco: "P.O. Box 142, 8864 Lobortis, Avenue", telefone: "1711-6489", sexo: "masculino", idade: 17},
    {nome: "William", cpf: "36505861599", endereco: "792-2148 Euismod Rd.", telefone: "5301-6177", sexo: "feminino", idade: 57},
    {nome: "Lois", cpf: "25292168099", endereco: "912-7497 Iaculis, Av.", telefone: "2661-4630", sexo: "masculino", idade: 62},
    {nome: "Dillon", cpf: "90418539099", endereco: "6090 Dolor. St.", telefone: "2812-6296", sexo: "masculino", idade: 27},
    {nome: "Plato", cpf: "97873617199", endereco: "2315 Molestie. Avenue", telefone: "7848-3689", sexo: "masculino", idade: 55},
    {nome: "Sawyer", cpf: "21533489199", endereco: "P.O. Box 999, 9357 Tincidunt, St.", telefone: "2659-4278", sexo: "masculino", idade: 29},
    {nome: "Cameron", cpf: "38663342399", endereco: "979-4743 Pede Street", telefone: "3722-2401", sexo: "masculino", idade: 18},
    {nome: "Adena", cpf: "56703941099", endereco: "Ap #980-6493 Urna. St.", telefone: "8844-5348", sexo: "masculino", idade: 17},
    {nome: "Gray", cpf: "87568186699", endereco: "P.O. Box 950, 9617 Facilisis Avenue", telefone: "3437-8128", sexo: "masculino", idade: 45},
    {nome: "Addison", cpf: "62499224999", endereco: "982-2058 Facilisis. St.", telefone: "3490-2380", sexo: "feminino", idade: 63},
    {nome: "Kylee", cpf: "19309201499", endereco: "4539 Sit Avenue", telefone: "7533-9307", sexo: "masculino", idade: 29},
    {nome: "Jolene", cpf: "45203040499", endereco: "263-7211 Porttitor Ave", telefone: "4116-1968", sexo: "feminino", idade: 18},
    {nome: "Caleb", cpf: "87654477499", endereco: "Ap #305-7342 Nam St.", telefone: "5810-6884", sexo: "feminino", idade: 59},
    {nome: "Seth", cpf: "80461307999", endereco: "P.O. Box 864, 9197 Ipsum. Ave", telefone: "5319-9647", sexo: "masculino", idade: 17},
    {nome: "Stephen", cpf: "40745523099", endereco: "P.O. Box 396, 5171 Luctus, Av.", telefone: "0502-2661", sexo: "masculino", idade: 64},
    {nome: "Hermione", cpf: "01948496199", endereco: "Ap #239-2068 Elementum Ave", telefone: "5621-4318", sexo: "masculino", idade: 39},
    {nome: "Sloane", cpf: "50536999199", endereco: "P.O. Box 602, 1239 Et Av.", telefone: "8038-2951", sexo: "feminino", idade: 60},
    {nome: "Madaline", cpf: "03731892099", endereco: "P.O. Box 704, 6917 Ornare, St.", telefone: "3628-0659", sexo: "masculino", idade: 25},
    {nome: "Christen", cpf: "49227896299", endereco: "Ap #209-7581 Nisl St.", telefone: "8484-6288", sexo: "masculino", idade: 34},
    {nome: "Olga", cpf: "50242258699", endereco: "5080 Id Av.", telefone: "3079-4507", sexo: "feminino", idade: 30},
    {nome: "Brenden", cpf: "59472736099", endereco: "6700 A, Street", telefone: "4545-7206", sexo: "feminino", idade: 44},
    {nome: "Allistair", cpf: "69392089099", endereco: "4301 Diam Road", telefone: "3281-3027", sexo: "masculino", idade: 60},
    {nome: "Bertha", cpf: "02754205699", endereco: "7614 At Street", telefone: "6016-3062", sexo: "masculino", idade: 59},
    {nome: "Ursa", cpf: "12204763199", endereco: "P.O. Box 388, 2183 Sit St.", telefone: "2657-1234", sexo: "feminino", idade: 45},
    {nome: "Clementine", cpf: "70755198099", endereco: "Ap #306-3159 Ut Street", telefone: "2857-4448", sexo: "masculino", idade: 24},
    {nome: "Nissim", cpf: "72955558199", endereco: "Ap #264-1384 Posuere St.", telefone: "9679-3639", sexo: "masculino", idade: 27},
    {nome: "Edward", cpf: "36249264599", endereco: "155-2271 Ac St.", telefone: "2146-4720", sexo: "feminino", idade: 37},
    {nome: "Alexander", cpf: "66501270299", endereco: "770-988 Sollicitudin Av.", telefone: "0489-1581", sexo: "feminino", idade: 22},
    {nome: "Igor", cpf: "17976174599", endereco: "767 Donec Street", telefone: "5049-7784", sexo: "masculino", idade: 52},
    {nome: "Jordan", cpf: "54604010499", endereco: "453-3647 Amet Rd.", telefone: "4767-3384", sexo: "masculino", idade: 21},
    {nome: "Emmanuel", cpf: "35814478399", endereco: "Ap #350-6549 Aliquet Rd.", telefone: "4813-3470", sexo: "feminino", idade: 60},
    {nome: "Lila", cpf: "52677789299", endereco: "Ap #399-3770 Ornare, Rd.", telefone: "1145-2305", sexo: "masculino", idade: 65},
    {nome: "Kato", cpf: "79486833699", endereco: "P.O. Box 723, 5106 Diam. St.", telefone: "4503-2595", sexo: "feminino", idade: 18},
    {nome: "Geraldine", cpf: "88343998399", endereco: "Ap #283-2486 Condimentum Ave", telefone: "0754-3523", sexo: "masculino", idade: 42},
    {nome: "Noelani", cpf: "94451112899", endereco: "P.O. Box 784, 7823 Proin St.", telefone: "1608-1384", sexo: "feminino", idade: 61},
    {nome: "Bell", cpf: "01710729699", endereco: "962-7790 Litora Avenue", telefone: "2744-6256", sexo: "masculino", idade: 40},
    {nome: "Lewis", cpf: "91227750199", endereco: "360-250 Rutrum Avenue", telefone: "6512-5513", sexo: "masculino", idade: 33},
    {nome: "Beck", cpf: "83544701099", endereco: "950-7527 Cursus Road", telefone: "5996-4625", sexo: "feminino", idade: 47},
    {nome: "Xantha", cpf: "31744743299", endereco: "P.O. Box 801, 3360 Natoque Street", telefone: "0709-7603", sexo: "masculino", idade: 49},
    {nome: "Melvin", cpf: "74383881099", endereco: "3025 Ut Rd.", telefone: "6272-8804", sexo: "masculino", idade: 47},
    {nome: "Dale", cpf: "28906560199", endereco: "Ap #732-6522 Aliquam Av.", telefone: "9824-7313", sexo: "masculino", idade: 22},
    {nome: "Robin", cpf: "99838233099", endereco: "Ap #384-4488 Lacus. Ave", telefone: "6842-0674", sexo: "masculino", idade: 65},
    {nome: "George", cpf: "07858481299", endereco: "Ap #458-6994 Cum Street", telefone: "5716-2791", sexo: "feminino", idade: 55},
    {nome: "Kirestin", cpf: "46948591199", endereco: "9985 Nec Road", telefone: "4561-3577", sexo: "masculino", idade: 47},
    {nome: "Anne", cpf: "50637041399", endereco: "P.O. Box 137, 7328 Ipsum St.", telefone: "6026-6872", sexo: "feminino", idade: 25},
    {nome: "Murphy", cpf: "69805734399", endereco: "Ap #447-4433 Nisl. Rd.", telefone: "0568-6165", sexo: "feminino", idade: 26},
    {nome: "McKenzie", cpf: "78387382799", endereco: "Ap #207-7473 Vitae Rd.", telefone: "1749-8408", sexo: "masculino", idade: 38},
    {nome: "Elvis", cpf: "25368364899", endereco: "P.O. Box 408, 652 Feugiat Avenue", telefone: "0181-3576", sexo: "feminino", idade: 20},
    {nome: "Rylee", cpf: "71383704499", endereco: "862-2989 Enim. Road", telefone: "8004-7023", sexo: "feminino", idade: 44},
    {nome: "Owen", cpf: "01772745599", endereco: "732-1067 Purus. Street", telefone: "8753-4182", sexo: "masculino", idade: 20},
    {nome: "Channing", cpf: "36411891399", endereco: "Ap #780-9325 Augue Rd.", telefone: "5311-5069", sexo: "masculino", idade: 47},
    {nome: "Nina", cpf: "68709272699", endereco: "960-5815 Sit Road", telefone: "5627-7869", sexo: "feminino", idade: 64},
    {nome: "Aurelia", cpf: "33924104799", endereco: "265-2478 Ultricies Rd.", telefone: "9847-9283", sexo: "feminino", idade: 64},
    {nome: "Athena", cpf: "96806065399", endereco: "P.O. Box 572, 3603 Dictum Ave", telefone: "2002-5453", sexo: "masculino", idade: 55},
    {nome: "Kay", cpf: "08693562799", endereco: "P.O. Box 142, 1286 Leo. Avenue", telefone: "0299-5672", sexo: "feminino", idade: 16},
    {nome: "Lucas", cpf: "79436636999", endereco: "Ap #651-7266 Ornare Rd.", telefone: "8187-5361", sexo: "feminino", idade: 24},
    {nome: "Kibo", cpf: "74502404299", endereco: "Ap #346-1758 Id St.", telefone: "8279-4266", sexo: "feminino", idade: 34},
    {nome: "Janna", cpf: "31343770199", endereco: "Ap #931-2653 Vitae St.", telefone: "2462-0758", sexo: "feminino", idade: 53},
    {nome: "Holly", cpf: "91346404599", endereco: "269-2394 Arcu. Ave", telefone: "3508-4589", sexo: "masculino", idade: 54},
    {nome: "Olga", cpf: "25502810899", endereco: "Ap #350-6589 Cubilia Rd.", telefone: "5867-4139", sexo: "feminino", idade: 31},
    {nome: "Cathleen", cpf: "98228027499", endereco: "8760 Urna, Avenue", telefone: "0534-7020", sexo: "masculino", idade: 34},
    {nome: "Gabriel", cpf: "34581868399", endereco: "Ap #242-1515 Mauris Avenue", telefone: "9578-7370", sexo: "masculino", idade: 46}
  ];




  constructor() {

    localStorage.setItem("Pacientes", JSON.stringify(this.pacientesBD));

  }

  ngOnInit() {
    this.pacientes = JSON.parse( localStorage.getItem("Pacientes"));

  }

}
