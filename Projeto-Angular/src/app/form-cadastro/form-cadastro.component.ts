import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent implements OnInit {
  public pacientes:any = {} ;
    pacientesBD = [
      {id: 1, nome: "Anne", cpf: "16700427-9217", endereco: "P.O. Box 151, 6515 Dolor. St.", telefone: "6023-4468", idade: 31, sexo: "masculino"},
      {id: 2, nome: "Xyla", cpf: "16400120-4686", endereco: "351-1727 Cras Rd.", telefone: "5439-4901", idade: 45, sexo: "masculino"},
      {id: 3, nome: "Caesar", cpf: "16550920-6065", endereco: "3005 Auctor St.", telefone: "9203-2042", idade: 44, sexo: "feminino"},
      {id: 4, nome: "Sara", cpf: "16190403-8468", endereco: "841-5368 Sem Street", telefone: "5612-4085", idade: 37, sexo: "feminino"},
      {id: 5, nome: "Malcolm", cpf: "16970826-4180", endereco: "665-7678 Enim. Av.", telefone: "5780-7799", idade: 63, sexo: "feminino"},
      {id: 6, nome: "Winter", cpf: "16960116-1186", endereco: "540-7226 Auctor, Ave", telefone: "1275-5102", idade: 32, sexo: "feminino"},
      {id: 7, nome: "Chelsea", cpf: "16810511-8437", endereco: "Ap #674-4143 Convallis Road", telefone: "3453-7670", idade: 63, sexo: "feminino"},
      {id: 8, nome: "Christine", cpf: "16651219-4736", endereco: "6673 In St.", telefone: "0106-5215", idade: 61, sexo: "masculino"},
      {id: 9, nome: "Damon", cpf: "16680303-2926", endereco: "4581 Nec Rd.", telefone: "0852-6195", idade: 22, sexo: "feminino"},
      {id: 10, nome: "Fletcher", cpf: "16030819-6153", endereco: "840-1291 Cras Street", telefone: "2909-8576", idade: 63, sexo: "feminino"},
      {id: 11, nome: "Justina", cpf: "16091020-1979", endereco: "7640 Turpis Street", telefone: "9711-9431", idade: 41, sexo: "masculino"},
      {id: 12, nome: "Tatyana", cpf: "16800101-7527", endereco: "911-2499 Ut St.", telefone: "4992-2995", idade: 41, sexo: "feminino"},
      {id: 13, nome: "Brock", cpf: "16950117-6102", endereco: "6124 Ornare, Ave", telefone: "4382-2543", idade: 35, sexo: "masculino"},
      {id: 14, nome: "Prescott", cpf: "16221117-0630", endereco: "P.O. Box 376, 8442 At St.", telefone: "4517-4766", idade: 24, sexo: "feminino"},
      {id: 15, nome: "Oscar", cpf: "16701216-4096", endereco: "P.O. Box 621, 4668 Accumsan Av.", telefone: "9969-4720", idade: 24, sexo: "masculino"},
      {id: 16, nome: "Christian", cpf: "16140719-6276", endereco: "738-8597 At Av.", telefone: "2104-2854", idade: 30, sexo: "masculino"},
      {id: 17, nome: "Shad", cpf: "16450316-2762", endereco: "P.O. Box 301, 1301 Tristique Avenue", telefone: "3766-6756", idade: 24, sexo: "feminino"},
      {id: 18, nome: "Alfreda", cpf: "16930303-1018", endereco: "585-7412 Aenean Rd.", telefone: "9622-2804", idade: 47, sexo: "masculino"},
      {id: 19, nome: "Maia", cpf: "16861109-7067", endereco: "P.O. Box 281, 889 Nulla Rd.", telefone: "8699-0307", idade: 35, sexo: "feminino"},
      {id: 20, nome: "Erica", cpf: "16730616-8274", endereco: "498-7752 Non, St.", telefone: "9960-9335", idade: 18, sexo: "feminino"},
      {id: 21, nome: "Kylynn", cpf: "16241023-8428", endereco: "4243 Hendrerit Rd.", telefone: "1491-8628", idade: 18, sexo: "feminino"},
      {id: 22, nome: "Zenia", cpf: "16431107-7038", endereco: "2907 Sed Rd.", telefone: "1294-0336", idade: 26, sexo: "masculino"},
      {id: 23, nome: "Lucas", cpf: "16610717-9605", endereco: "Ap #274-2337 Feugiat St.", telefone: "7529-0962", idade: 56, sexo: "feminino"},
      {id: 24, nome: "Zephr", cpf: "16560407-6538", endereco: "349-6645 Rutrum, Street", telefone: "5535-1174", idade: 60, sexo: "masculino"},
      {id: 25, nome: "Ferris", cpf: "16220822-0042", endereco: "Ap #452-6606 Diam Rd.", telefone: "3682-8010", idade: 26, sexo: "feminino"},
      {id: 26, nome: "Omar", cpf: "16790913-0358", endereco: "6681 Mauris St.", telefone: "8161-1917", idade: 56, sexo: "masculino"},
      {id: 27, nome: "Harriet", cpf: "16841201-7355", endereco: "7194 Ullamcorper Ave", telefone: "9613-7678", idade: 30, sexo: "masculino"},
      {id: 28, nome: "Kane", cpf: "16470514-5706", endereco: "P.O. Box 989, 7838 Urna St.", telefone: "4437-7777", idade: 24, sexo: "masculino"},
      {id: 29, nome: "Ferris", cpf: "16010304-1299", endereco: "1111 Cras Street", telefone: "7276-4981", idade: 50, sexo: "feminino"},
      {id: 30, nome: "Mark", cpf: "16130716-1214", endereco: "Ap #568-1679 Tempus St.", telefone: "6397-0217", idade: 23, sexo: "masculino"},
      {id: 31, nome: "Justina", cpf: "16421030-0606", endereco: "Ap #959-5385 Vel Rd.", telefone: "3267-8565", idade: 23, sexo: "masculino"},
      {id: 32, nome: "Jackson", cpf: "16980116-7462", endereco: "Ap #617-6469 Sed Rd.", telefone: "4000-2842", idade: 52, sexo: "masculino"},
      {id: 33, nome: "Sonia", cpf: "16801017-5399", endereco: "P.O. Box 841, 1985 Orci Rd.", telefone: "9851-6324", idade: 28, sexo: "masculino"},
      {id: 34, nome: "Nissim", cpf: "16501119-0583", endereco: "675-6981 Natoque Rd.", telefone: "7165-9877", idade: 33, sexo: "masculino"},
      {id: 35, nome: "Gannon", cpf: "16410425-3234", endereco: "502-6708 Turpis St.", telefone: "6319-2073", idade: 32, sexo: "masculino"},
      {id: 36, nome: "Aidan", cpf: "16650105-9189", endereco: "416-4742 Hendrerit. Av.", telefone: "4445-1674", idade: 35, sexo: "masculino"},
      {id: 37, nome: "Ann", cpf: "16630716-6477", endereco: "5084 Tempor Rd.", telefone: "5942-9576", idade: 38, sexo: "feminino"},
      {id: 38, nome: "Sara", cpf: "16040416-0483", endereco: "606-2967 Tellus Rd.", telefone: "2836-2117", idade: 38, sexo: "feminino"},
      {id: 39, nome: "Leilani", cpf: "16220423-5705", endereco: "9513 Mi Road", telefone: "2451-2297", idade: 31, sexo: "masculino"},
      {id: 40, nome: "Camilla", cpf: "16220214-2978", endereco: "Ap #909-4725 Commodo Ave", telefone: "5640-6875", idade: 18, sexo: "feminino"},
      {id: 41, nome: "Norman", cpf: "16620621-0756", endereco: "P.O. Box 724, 6270 Augue St.", telefone: "3418-0750", idade: 18, sexo: "masculino"},
      {id: 42, nome: "Garrison", cpf: "16590717-1754", endereco: "2764 Euismod St.", telefone: "9648-9060", idade: 35, sexo: "masculino"},
      {id: 43, nome: "Brenden", cpf: "16651015-2983", endereco: "P.O. Box 769, 6158 Suspendisse Road", telefone: "1372-8044", idade: 19, sexo: "feminino"},
      {id: 44, nome: "Logan", cpf: "16310111-6295", endereco: "Ap #302-6968 Dolor Avenue", telefone: "0434-7564", idade: 43, sexo: "masculino"},
      {id: 45, nome: "Ivana", cpf: "16490927-9145", endereco: "1175 Quisque Rd.", telefone: "6932-8489", idade: 40, sexo: "feminino"},
      {id: 46, nome: "Cheryl", cpf: "16360802-6708", endereco: "P.O. Box 117, 2923 Tristique Rd.", telefone: "6060-7163", idade: 29, sexo: "masculino"},
      {id: 47, nome: "Zorita", cpf: "16490913-3672", endereco: "8063 Mi Rd.", telefone: "7189-6858", idade: 23, sexo: "masculino"},
      {id: 48, nome: "Berk", cpf: "16920414-8945", endereco: "P.O. Box 967, 7710 Donec Av.", telefone: "0862-8540", idade: 40, sexo: "feminino"},
      {id: 49, nome: "Austin", cpf: "16610425-3791", endereco: "1338 Ut, St.", telefone: "1212-6775", idade: 58, sexo: "feminino"},
      {id: 50, nome: "Fay", cpf: "16970522-6174", endereco: "P.O. Box 221, 9824 Morbi Rd.", telefone: "7360-6475", idade: 16, sexo: "feminino"},
      {id: 51, nome: "Hyatt", cpf: "16941223-7902", endereco: "Ap #254-387 Consequat Street", telefone: "3093-3057", idade: 44, sexo: "feminino"},
      {id: 52, nome: "Jeanette", cpf: "16590105-6639", endereco: "P.O. Box 600, 941 Dui Rd.", telefone: "9949-3352", idade: 17, sexo: "feminino"},
      {id: 53, nome: "Heather", cpf: "16650815-2722", endereco: "9087 A, Av.", telefone: "4736-9496", idade: 34, sexo: "feminino"},
      {id: 54, nome: "Guinevere", cpf: "16000327-5518", endereco: "5018 Congue Street", telefone: "2755-0111", idade: 23, sexo: "masculino"},
      {id: 55, nome: "Solomon", cpf: "16350608-9741", endereco: "9929 Pellentesque Ave", telefone: "8904-6882", idade: 53, sexo: "masculino"},
      {id: 56, nome: "Yoshi", cpf: "16640403-6524", endereco: "P.O. Box 380, 5330 Ac St.", telefone: "8409-8281", idade: 60, sexo: "masculino"},
      {id: 57, nome: "Inez", cpf: "16090325-9091", endereco: "5682 Curae; Ave", telefone: "5948-3309", idade: 18, sexo: "masculino"},
      {id: 58, nome: "Madaline", cpf: "16290912-9690", endereco: "800-4802 Sit Rd.", telefone: "3839-9709", idade: 44, sexo: "masculino"},
      {id: 59, nome: "Felicia", cpf: "16440722-7422", endereco: "P.O. Box 686, 2375 Tincidunt Av.", telefone: "0817-2867", idade: 53, sexo: "feminino"},
      {id: 60, nome: "Armand", cpf: "16911224-6575", endereco: "997 Vel Rd.", telefone: "1550-3166", idade: 55, sexo: "feminino"},
      {id: 61, nome: "Jackson", cpf: "16930313-0588", endereco: "6351 Quis Av.", telefone: "4884-6323", idade: 18, sexo: "feminino"},
      {id: 62, nome: "Aidan", cpf: "16601203-9845", endereco: "P.O. Box 119, 331 Pede. St.", telefone: "5819-1810", idade: 27, sexo: "feminino"},
      {id: 63, nome: "Dawn", cpf: "16630507-8146", endereco: "Ap #276-5836 Aliquet. Rd.", telefone: "4836-4311", idade: 39, sexo: "masculino"},
      {id: 64, nome: "Janna", cpf: "16440206-1826", endereco: "Ap #241-5621 Habitant St.", telefone: "6918-8474", idade: 26, sexo: "masculino"},
      {id: 65, nome: "Keane", cpf: "16210927-6473", endereco: "815-2551 Curabitur St.", telefone: "0855-9015", idade: 41, sexo: "masculino"},
      {id: 66, nome: "Elliott", cpf: "16970903-4111", endereco: "6809 Nulla. Street", telefone: "2278-8744", idade: 40, sexo: "feminino"},
      {id: 67, nome: "Shelly", cpf: "16110619-0265", endereco: "7658 Pretium Road", telefone: "5433-3753", idade: 41, sexo: "feminino"},
      {id: 68, nome: "Knox", cpf: "16390902-3800", endereco: "276-4162 Mi, Avenue", telefone: "0104-2357", idade: 37, sexo: "masculino"},
      {id: 69, nome: "Colleen", cpf: "16210428-0439", endereco: "801-9875 Accumsan Rd.", telefone: "6542-9199", idade: 50, sexo: "feminino"},
      {id: 70, nome: "Gwendolyn", cpf: "16070106-8843", endereco: "750-6413 Nec Rd.", telefone: "7295-9754", idade: 46, sexo: "masculino"},
      {id: 71, nome: "Robert", cpf: "16050219-1042", endereco: "P.O. Box 940, 6452 Cursus St.", telefone: "3829-7509", idade: 56, sexo: "masculino"},
      {id: 72, nome: "Oliver", cpf: "16881124-0137", endereco: "5962 Egestas. Ave", telefone: "6652-5696", idade: 63, sexo: "masculino"},
      {id: 73, nome: "Basil", cpf: "16381006-0222", endereco: "1327 Lectus. Rd.", telefone: "9160-3693", idade: 27, sexo: "feminino"},
      {id: 74, nome: "Nasim", cpf: "16130516-8203", endereco: "Ap #952-3232 Eleifend Rd.", telefone: "3494-6350", idade: 16, sexo: "masculino"},
      {id: 75, nome: "Magee", cpf: "16111106-6823", endereco: "624-9803 Massa. Ave", telefone: "3810-0402", idade: 56, sexo: "masculino"},
      {id: 76, nome: "Shaine", cpf: "16100327-7843", endereco: "Ap #585-3818 Fermentum Rd.", telefone: "0354-6125", idade: 59, sexo: "masculino"},
      {id: 77, nome: "Ifeoma", cpf: "16621003-4408", endereco: "Ap #238-7904 Magnis St.", telefone: "8980-6843", idade: 37, sexo: "feminino"},
      {id: 78, nome: "Cailin", cpf: "16400408-9639", endereco: "Ap #476-3695 A Road", telefone: "1939-5925", idade: 26, sexo: "feminino"},
      {id: 79, nome: "Darrel", cpf: "16570703-8054", endereco: "P.O. Box 207, 4754 Placerat, St.", telefone: "0425-4859", idade: 40, sexo: "masculino"},
      {id: 80, nome: "Damian", cpf: "16250506-4275", endereco: "P.O. Box 879, 7368 Phasellus St.", telefone: "6404-9821", idade: 20, sexo: "masculino"},
      {id: 81, nome: "Xander", cpf: "16401002-3895", endereco: "3317 Dictum. Street", telefone: "8556-9410", idade: 17, sexo: "feminino"},
      {id: 82, nome: "Jessica", cpf: "16971220-5047", endereco: "Ap #251-6133 Posuere Street", telefone: "0162-4025", idade: 35, sexo: "masculino"},
      {id: 83, nome: "Phelan", cpf: "16740414-8434", endereco: "Ap #545-2510 Morbi Avenue", telefone: "9213-0647", idade: 26, sexo: "masculino"},
      {id: 84, nome: "Hadley", cpf: "16420205-0334", endereco: "418-1844 Ligula St.", telefone: "3743-0062", idade: 28, sexo: "feminino"},
      {id: 85, nome: "Claudia", cpf: "16780220-1132", endereco: "Ap #561-240 Eget Road", telefone: "5391-4495", idade: 24, sexo: "feminino"},
      {id: 86, nome: "Deacon", cpf: "16810107-1770", endereco: "693-2769 Sollicitudin Ave", telefone: "9332-9254", idade: 56, sexo: "feminino"},
      {id: 87, nome: "Wynter", cpf: "16060227-2429", endereco: "P.O. Box 590, 2204 Curabitur St.", telefone: "9041-8184", idade: 20, sexo: "masculino"},
      {id: 88, nome: "Colorado", cpf: "16321126-2906", endereco: "Ap #110-7738 Nunc Street", telefone: "1635-5366", idade: 17, sexo: "masculino"},
      {id: 89, nome: "Maris", cpf: "16890707-4127", endereco: "Ap #110-7151 Est. St.", telefone: "6375-8249", idade: 64, sexo: "feminino"},
      {id: 90, nome: "Abel", cpf: "16990215-1738", endereco: "P.O. Box 586, 6619 Morbi Rd.", telefone: "9969-2007", idade: 55, sexo: "feminino"},
      {id: 91, nome: "Sawyer", cpf: "16730220-9361", endereco: "P.O. Box 567, 3362 Facilisis Street", telefone: "2073-7084", idade: 37, sexo: "masculino"},
      {id: 92, nome: "Martina", cpf: "16340130-2033", endereco: "325-9318 Arcu St.", telefone: "9340-4812", idade: 21, sexo: "feminino"},
      {id: 93, nome: "Nita", cpf: "16580616-7200", endereco: "Ap #268-4556 Nulla St.", telefone: "9895-8108", idade: 35, sexo: "feminino"},
      {id: 94, nome: "Wesley", cpf: "16510518-7925", endereco: "Ap #792-3662 Aliquet. Street", telefone: "6523-9190", idade: 27, sexo: "masculino"},
      {id: 95, nome: "Cecilia", cpf: "16300616-4812", endereco: "Ap #994-7674 Malesuada St.", telefone: "9962-7049", idade: 38, sexo: "feminino"},
      {id: 96, nome: "Solomon", cpf: "16850207-4118", endereco: "Ap #667-1498 Cum St.", telefone: "7669-2420", idade: 35, sexo: "masculino"},
      {id: 97, nome: "Brianna", cpf: "16450125-7051", endereco: "Ap #511-301 Et Road", telefone: "7304-0073", idade: 49, sexo: "masculino"},
      {id: 98, nome: "Imogene", cpf: "16001126-5287", endereco: "P.O. Box 424, 4898 Morbi Rd.", telefone: "0241-0176", idade: 52, sexo: "masculino"},
      {id: 99, nome: "Uriah", cpf: "16330115-5408", endereco: "P.O. Box 478, 5853 Orci St.", telefone: "4126-4531", idade: 46, sexo: "masculino"},
      {id: 100, nome: "Nita", cpf: "16550520-6408", endereco: "P.O. Box 844, 9570 Ut, Av.", telefone: "6152-4166", idade: 60, sexo: "feminino"}
    ];





  constructor() {
    localStorage.setItem("Pacientes", JSON.stringify(this.pacientesBD));
    this.pacientes = JSON.parse( localStorage.getItem("Pacientes"));
  }

  onSubmit(form){
    let data: any;
    data = form.value
    data.id = Date.now()
    this.pacientes.push(data)
    localStorage.setItem("Pacientes", JSON.stringify(this.pacientes));
    form.resetForm();


  }
  ngOnInit() {

  }

}
