import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Gibson Les Paul Standard',
          img: 'gibson-les-paul-std.jpeg',
          desc: 'Электрогитара',
          category: 'electric-guitars',
          fulldesc: 'Гитара в стиле шестидесятых с одним вырезом, наборный гриф, кленовый топ с пламенем AA, пикапы Burstbucker 61',
          price: '2119.99'
        },
        {
          id: 2,
          title: 'Gibson SG Standard',
          img: 'gibson-sg-std.jpeg',
          desc: 'Электрогитара',
          category: 'electric-guitars',
          fulldesc: 'Электрогитара Double Cut, покрытие Nitro, наборный гриф, корпус и гриф из красного дерева, пикапы 60s Burstbucker',
          price: '1599.99'
        },
        {
          id: 3,
          title: 'Fender Eric Clapton',
          img: 'fender-strat-ericclap.jpeg',
          desc: 'Электрогитара',
          category: 'electric-guitars',
          fulldesc: 'Fender Eric Clapton Stratocaster (черный) - это 6-струнная электрогитара, точная копия культового инструмента Эрика Клэптона',
          price: '2199.99'
        },
        {
          id: 4,
          title: 'Fender Player Telecaster',
          img: 'fender-player-tele.jpeg',
          desc: 'Электрогитара',
          category: 'electric-guitars',
          fulldesc: 'Fender Player II Telecaster RW British Racing Green сочетает в себе высокое качество сборки и культовое винтажное звучание Tele',
          price: '619.99'
        },
        {
          id: 5,
          title: 'ESP Eclipse Custom',
          img: 'esp-ec-cust.jpeg',
          desc: 'Электрогитара',
          category: 'electric-guitars',
          fulldesc: 'Электрогитара Custom Shop, сделанная в Японии, с хамбакерами EMG JH "HET"-Set и фурнитурой Gotoh/TonePros',
          price: '4699.99'
        },
        {
          id: 6,
          title: 'ESP E-II Viper Baritone',
          img: 'esp-e-ii-vb.jpeg',
          desc: 'Электрогитара',
          category: 'electric-guitars',
          fulldesc: 'Электрогитара Hi-end сегмента, сделанная в Японии, с хамбакерами EMG 81/60 и увеличенной мензурой 27 дюймов',
          price: '1199.99'
        },
        {
          id: 7,
          title: 'Ernie Ball 2223',
          img: 'erb-str-942.jpeg',
          desc: 'Струны для электрогитар',
          category: 'electric-strings',
          fulldesc: 'Ernie Ball струны для электрогитар 9-42 Super Slinky Nickel Wound 2223',
          price: '4.99'
        },
        {
          id: 8,
          title: 'Ernie Ball 2824',
          img: 'erb-strb-40125.jpeg',
          desc: 'Струны для бас-гитар',
          category: 'electric-bass-strings',
          fulldesc: 'EB2824 Super Slinky Bass 5-Strings 40-125 - это набор из 5 струн из никелированной стали',
          price: '21.99'
        },
        {
          id: 9,
          title: 'Ernie Ball 2214',
          img: 'erb-str-1362.jpeg',
          desc: 'Струны для электрогитар',
          category: 'electric-strings',
          fulldesc: 'Ernie Ball EB2214 Mammoth Slinky Guitar Strings 12-62 - это полный комплект из 6 струн, предназначенный для использования на электрогитарах с увеличенной мензурой',
          price: '5.99'
        },
        {
          id: 10,
          title: 'Ernie Ball 2832',
          img: 'erb-strb-50105.jpeg',
          desc: 'Струны для бас-гитар',
          category: 'electric-bass-strings',
          fulldesc: 'Басовые струны EB2832 Regular Slinky 50-105 представляют собой набор из 4-х стальных струн с никелированным покрытием',
          price: '15.99'
        },
        {
          id: 11,
          title: 'Ibanez GSR 180 Sunburst',
          img: 'ibz-gsr-180.jpeg',
          desc: 'Бас-гитара',
          category: 'bass-guitars',
          fulldesc: 'Тренды возникают и устаревают, но басы-гитары серии Soundgear и по сей день продолжают создавать грув во всех воображаемых стилях',
          price: '159.99'
        },
        {
          id: 12,
          title: 'Ibanez GSR 180 Black',
          img: 'ibz-gsr-180bk.jpeg',
          desc: 'Бас-гитара',
          category: 'bass-guitars',
          fulldesc: 'Тренды возникают и устаревают, но басы-гитары серии Soundgear и по сей день продолжают создавать грув во всех воображаемых стилях',
          price: '179.99'
        },
        {
          id: 13,
          title: 'Ibanez Standard SR300E',
          img: 'ibz-sr-300e.jpeg',
          desc: 'Бас-гитара',
          category: 'bass-guitars',
          fulldesc: 'Ibanez SR300E-PW Pearl White – четырехструнная бас-гитара с корпусом из красного дерева, грифом из клена и палисандра',
          price: '309.99'
        },
        {
          id: 14,
          title: 'Ibanez Standard SR305E',
          img: 'ibz-sr-305e.jpeg',
          desc: 'Бас-гитара',
          category: 'bass-guitars',
          fulldesc: 'Ibanez Standard SR305E-PW Pearl White – пятиструнная бас-гитара с корпусом из красного дерева, грифом из клена и палисандра',
          price: '349.99'
        },
        {
          id: 15,
          title: 'Ibanez Standard SR305EB',
          img: 'ibz-sr-305ebk.jpeg',
          desc: 'Бас-гитара',
          category: 'bass-guitars',
          fulldesc: 'Ibanez Standard SR305EB – пятиструнный бас с грифом из клена и палисандра, накладкой из палисандра, оснащенный 24-мя ладами медиум-размере, имеющий корпус из красного дерева и два датчика Powerspan Dual Coil.',
          price: '349.99'
        },
        {
          id: 16,
          title: 'Fame FS22B First Step',
          img: 'fame-fs22b-first-step.jpeg',
          desc: 'Барабанная установка',
          category: 'drumm-kits',
          fulldesc: 'Барабанная установка Fame для начинающих с тарелками, аппаратурой и табуреткой.',
          price: '279.99'
        },
        {
          id: 18,
          title: 'Fame JBKM1605HW',
          img: 'fame-jbkm160.jpeg',
          desc: 'Барабанная установка',
          category: 'drumm-kits',
          fulldesc: 'Ударная установка для начинающих в полной комплектации и по-настоящему профессиональным звуком за небольшие деньги!',
          price: '289.99'
        },
        {
          id: 19,
          title: 'Ludwig Accent Drive Black',
          img: 'ludwig-accent-drive-black.jpeg',
          desc: 'Барабанная установка',
          category: 'drumm-kits',
          fulldesc: 'Практичный комплект для начинающих. Состоящий из пяти раковин, комплекта оборудования и набора тарелок, он не оставляет желать лучшего.',
          price: '449.99'
        },
        {
          id: 20,
          title: 'Ludwig Accent Drive White',
          img: 'ludwig-accent-drive-white.jpeg',
          desc: 'Барабанная установка',
          category: 'drumm-kits',
          fulldesc: 'Практичный комплект для начинающих. Состоящий из пяти раковин, комплекта оборудования и набора тарелок, он не оставляет желать лучшего.',
          price: '449.99'
        },
        {
          id: 21,
          title: 'Tama Stagestar Black',
          img: 'tama-st52h5-black.jpeg',
          desc: 'Барабанная установка',
          category: 'drumm-kits',
          fulldesc: 'Серия Tama Stagestar предлагает пятикомпонентную барабанную установку с полным набором оборудования и тарелок по отличной цене.',
          price: '559.99'
        },
        {
          id: 22,
          title: 'Tama Stagestar Red',
          img: 'tama-st52h5-red.jpeg',
          desc: 'Барабанная установка',
          category: 'drumm-kits',
          fulldesc: 'Серия Tama Stagestar предлагает пятикомпонентную барабанную установку с полным набором оборудования и тарелок по отличной цене.',
          price: '559.99'
        },
        {
          id: 23,
          title: 'Behringer UMC22',
          img: 'bh-umc22.jpeg',
          desc: 'Аудиоинтерфейс',
          category: 'audio-interface',
          fulldesc: 'Аудиоинтерфейс 2x2 USB с одним микрофонным входом с высококачественным предусилителем MIDAS; для записи дома и в дороге',
          price: '34.99'
        },
        {
          id: 24,
          title: 'Behringer UM2',
          img: 'bh-um2.jpeg',
          desc: 'Аудиоинтерфейс',
          category: 'audio-interface',
          fulldesc: 'USB-аудиоинтерфейс с 2 входами/2 выходами, предусилителем Xenyx и выходом на наушники. ',
          price: '24.99'
        },
        {
          id: 25,
          title: 'Mackie Onyx Artist 1x2',
          img: 'mackie-onyx-artist.jpeg',
          desc: 'Аудиоинтерфейс',
          category: 'audio-interface',
          fulldesc: 'Аудиоинтерфейс Mackie Onyx Artist 1x2 представляет собой USB-аудиоинтерфейс с 2 входами и 2 выходами. Преобразователи Mackie Onyx Artist 1-2 впечатляют не только высоким разрешением 24 бита/192 кГц и первоклассной аналоговой схемой, но и прочным стальным корпусом, что делает их идеальными помощниками для певцов, авторов песен, композиторов и записи на мобильные устройства.',
          price: '69.99'
        },
        {
          id: 26,
          title: 'Mackie Onyx Producer 2x2',
          img: 'mackie-onyx-producer.jpeg',
          desc: 'Аудиоинтерфейс',
          category: 'audio-interface',
          fulldesc: 'USB-аудиоинтерфейс с 2 предусилителями, 2 DI, MIDI, управление прямым мониторингом. 24 бит/192 кГц.',
          price: '74.99'
        },
        {
          id: 27,
          title: 'Focusrite Scarlett Solo 4th',
          img: 'fsc-41.jpeg',
          desc: 'Аудиоинтерфейс',
          category: 'audio-interface',
          fulldesc: 'Интуитивно понятный USB-аудиоинтерфейс с 2 разъемами для подключения инструментов и микрофонов и дополнительным программным обеспечением.',
          price: '109.99'
        },
        {
          id: 28,
          title: 'Focusrite Scarlett 2i2 4th',
          img: 'fsc-422.jpeg',
          desc: 'Аудиоинтерфейс',
          category: 'audio-interface',
          fulldesc: 'Интуитивно понятный USB-аудиоинтерфейс с двумя разъемами для подключения инструментов и микрофонов и дополнительным программным обеспечением.',
          price: '134.99'
        },
        {
          id: 29,
          title: 'Ernie Ball EB6077',
          img: 'eb6077.jpeg',
          desc: 'Инструментальные кабели',
          category: 'instr-cables',
          fulldesc: 'Благодаря своему дизайну и высококачественным материалам инструментальный кабель Ernie Ball обладает чистым и четким звучанием. Длина 3м',
          price: '14.99'
        },
        {
          id: 30,
          title: 'Ernie Ball EB6082',
          img: 'eb6082.jpeg',
          desc: 'Инструментальные кабели',
          category: 'instr-cables',
          fulldesc: 'Благодаря своему дизайну и высококачественным материалам инструментальный кабель Ernie Ball обладает чистым и четким звучанием. Длина 5м',
          price: '23.99'
        },
        {
          id: 31,
          title: 'Ernie Ball EB6049',
          img: 'eb6049.jpeg',
          desc: 'Инструментальные кабели',
          category: 'instr-cables',
          fulldesc: 'Кабель Ernie Ball P06049 Ultraflex Mono (несимметричный) Jack Cable White длиной 3 м представляет собой прямой приборный кабель с двойным экранированием и белой оболочкой. Длина 3м',
          price: '13.99'
        },
        {
          id: 32,
          title: 'Ernie Ball EB6047',
          img: 'eb6047.jpeg',
          desc: 'Инструментальные кабели',
          category: 'instr-cables',
          fulldesc: 'Кабель Ernie Ball P06047 Ultraflex Mono (несимметричный) Jack Cable White длиной 3 м представляет собой прямой приборный кабель с двойным экранированием и белой оболочкой. Длина 5м',
          price: '22.99'
        },
        {
          id: 33,
          title: 'Yamaha P-225 Black',
          img: 'yamaha-p-225-black.jpeg',
          desc: 'Клавишные',
          category: 'pianos',
          fulldesc: 'Пианино Yamaha Stage Piano - последнее поколение популярной серии P, поставляется в элегантном кейсе',
          price: '518.99'
        },
        {
          id: 34,
          title: 'Yamaha P-225 White',
          img: 'yamaha-p-225-wh.jpeg',
          desc: 'Клавишные',
          category: 'pianos',
          fulldesc: 'P-225 - последнее поколение популярной серии P от Yamaha, поставляется в элегантном кейсе',
          price: '569.99'
        },
        {
          id: 35,
          title: 'Casio PX-S5000 BK',
          img: 'casio-px-s5000-bk.jpeg',
          desc: 'Клавишные',
          category: 'pianos',
          fulldesc: 'Сценическое фортепиано, пианино, 88 клавиш, гибридная молоточковая клавиатура Smart, 192 голоса, реверберация, Bluetooth, динамик',
          price: '659.99'
        },
        {
          id: 36,
          title: 'Casio Privia PX-S3100',
          img: 'casio-privia-px-s3100.jpeg',
          desc: 'Клавишные',
          category: 'pianos',
          fulldesc: 'Элегантное сценическое фортепиано с высококачественной, удобной для игры клавиатурой, 192 голосами, 700 звуками и Bluetooth Audio',
          price: '686.99'
        },
        {
          id: 37,
          title: 'Yamaha F310',
          img: 'yamaha-f310.jpeg',
          desc: 'Акустические гитары',
          category: 'acoustic-guitars',
          fulldesc: 'Акустическая гитара, дредноут, дека из ламинированной ели, накладка из палисандра, мензура 634 мм, фурнитура из карбамида, глянцевое покрытие',
          price: '139.99'
        },
        {
          id: 38,
          title: 'Fender CD-60S',
          img: 'fender-cd-60s.jpeg',
          desc: 'Акустические гитары',
          category: 'acoustic-guitars',
          fulldesc: 'Акустическая гитара, дредноут, верх из цельной ели, корпус из ламинированного красного дерева, гриф из орехового дерева, глянцевое покрытие',
          price: '144.99'
        },
        {
          id: 39,
          title: 'Gibson 1952 J-185 VSB',
          img: 'gibson-1952-j.jpeg',
          desc: 'Акустические гитары',
          category: 'acoustic-guitars',
          fulldesc: 'Акустическая гитара, размер J-185, Custom Shop, полностью цельная, верх из ели ситка, корпус из клена, гриф из палисандра',
          price: '4199.99'
        },
        {
          id: 40,
          title: 'PRS SE A60E',
          img: 'prs-se-a60e.jpeg',
          desc: 'Акустические гитары',
          category: 'acoustic-guitars',
          fulldesc: 'Акустическая гитара формата PRS-Angelus с топом из цельной ели Sitka, корпусом из Ziricote, звукоснимателем и кейсом',
          price: '959.99'
        },
        {
          id: 41,
          title: 'Epiphone Hummingbird 12',
          img: 'epiphone-12str.jpeg',
          desc: 'Акустические гитары',
          category: 'acoustic-guitars',
          fulldesc: 'Электроакустическая 12-струнная акустическая гитара, дредноут, топ из ситкинской ели, корпус из красного дерева, золотая фурнитура и звукосниматель',
          price: '679.99'
        },
        {
          id: 42,
          title: 'Gibson J-45 Standard 12',
          img: 'gibson-j-45-12.jpeg',
          desc: 'Акустические гитары',
          category: 'acoustic-guitars',
          fulldesc: 'Акустическая гитара, 12-струнная, цельная, топ из ситкинской ели, корпус из красного дерева, накладка из палисандра, звукосниматель, поставляется с чехлом',
          price: '2899.99'
        },
        
        
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
