type DrumsType = 'acoustic' | 'eletronic' | 'pearl' | 'alesis' | 'mapex' | 'sonor' | 'alesis' | 'rolland' | 'yamaha';

type Drums = {
    type: DrumsType,
    model: DrumsType,
    image: string,
    name: string;
    description: string
}

const data: Drums[] = [
    {
        model: 'pearl',
        type: 'acoustic',
        image: 'pf1.jpg',
        name: 'Pearl Forum',
        description: 'The Pearl Forum series comes from its popular lines of beginner drum kits. It features a complete five-piece shell pack, Pearls 890 series hardware, C.X.P. cymbal set, Vic Firth 5A drum sticks, and a DVD with instructions.'
    },
    {
        model: 'pearl',
        type: 'acoustic',
        image: 'pf2.jpg',
        name: 'Pearl Forum',
        description: 'The Pearl Forum series comes from its popular lines of beginner drum kits. It features a complete five-piece shell pack, Pearls 890 series hardware, C.X.P. cymbal set, Vic Firth 5A drum sticks, and a DVD with instructions.'
    },
    {
        model: 'pearl',
        type: 'acoustic',
        image: 'pf3.jpg',
        name: 'Pearl Forum',
        description: 'The Pearl Forum series comes from its popular lines of beginner drum kits. It features a complete five-piece shell pack, Pearls 890 series hardware, C.X.P. cymbal set, Vic Firth 5A drum sticks, and a DVD with instructions.'
    },
    {
        model: 'pearl',
        type: 'acoustic',
        image: 'pe1.jpg',
        name: 'Pearl Export',
        description: "The shells of the Pearl Export Series are constructed using Pearl's proprietary Superior Shell Technology, which combines Pearl's hyper-strong Acoustiglue and one thousand pounds of hydraulic pressure to create a multi-ply shell with the sonic behavior of a thick single-ply — focused and fat!"
    },
    {
        model: 'pearl',
        type: 'acoustic',
        image: 'pe2.jpg',
        name: 'Pearl Export EXX',
        description: "Ocupando há mais de 30 anos o posto de série de bateria mais vendida em todo o planeta, a Pearl Export permanece como o nome mais reconhecido quando o assunto é bateria."
    },
    {
        model: 'pearl',
        type: 'acoustic',
        image: 'pm1.jpg',
        name: 'Pearl Master Maple Complete',
        description: "Ao criar os novos tambores Masters Maple Complete, a Pearl realizou uma refinada representação do histórico de 25 anos da Masters Series, reproduzindo o som que fez a lenda da série Masters brilhar, a Masters Maple Complete é a ferramenta perfeita para deixar o baterista profissional pronto para a estrada."
    },
    {
        model: 'pearl',
        type: 'acoustic',
        image: 'pr1.jpg',
        name: 'Pearl Reference',
        description: "Para entender esses tambores em toda a sua plenitude você deve aceitar o fato de que as características tonais dos toms são completamente diferentes das do bumbo, e que fabricar esses tambores utilizando a mesma composição resultaria em prejuízo em alguma das partes."
    },
    {
        model: 'mapex',
        type: 'acoustic',
        image: 'm1.jpg',
        name: 'Saturn Fusion',
        description: "The New Mapex Nodal Line Air Flow Venting Scheme gives Saturn a superior feel and just the right amount of resonance. Whether tuning up high for jazz and fusion or down deep for rock-n-roll, the unique Maple and Walnut shell composition, complete with SONIClear™ bearing edges, results in clear and focused toms and a bass drum that sounds bigger than it should."
    },
    {
        model: 'mapex',
        type: 'acoustic',
        image: 'm2.jpg',
        name: 'Saturn Fusion',
        description: 'The Mars Series Shell Pack offers 100% Birch, shallow depth shells with the new SONIClear™ bearing edge, producing a fast, clear tone with a quick rebound. The Mars Series "Rock 24" Shell Pack features a 1 up and 1 down tom set-up that keeps all the toms within easy reach while the 24" bass drum produces a powerful, yet naturally equalized tone.'
    },
    {
        model: 'sonor',
        type: 'acoustic',
        image: 's1.png',
        name: 'AQ2 Series',
        description: 'Whether you go for one of our four high gloss lacquer finishes or for the classic white pearl wrap – you will enjoy the look of your AQ2 kit as much as your audience does.'
    },
    {
        model: 'sonor',
        type: 'acoustic',
        image: 's2.jpg',
        name: 'AQX Series',
        description: 'AQX - it has never been this easy to start your SONOR journey.'
    },
    {
        model: 'sonor',
        type: 'acoustic',
        image: 's3.png',
        name: 'Vintage Series',
        description: 'Fans of the Vintage Series are spoilt for choice: they can choose either the new finish California Blue or one of the three classics Red Oyster, Vintage Pearl or Black Slate.'
    },
    {
        model:'alesis',
        type: 'eletronic',
        image: 'a1.jpg',
        name: 'Alesis Strike Pro',
        description: "The original Alesis Strike drums were revolutionary, featuring all-new drum and cymbal design. The new Strike Pro Special Edition builds on that legacy, most notably with its full-sized 20-inch kick drum. It looks and feels like an acoustic drum. It’s ground-breaking."
    },
    {
        model:'alesis',
        type: 'eletronic',
        image: 'a2.jpg',
        name: 'Command Mesh Kit',
        description: 'The Command Mesh Kit features all mesh-head pads that deliver an authentic drumming experience. This kit includes an 8" mesh kick with pedal, a 10" dual-zone mesh snare drum, and three 8" dual-zone mesh toms. The set also features a 10" ride cymbal with choke, a 10" crash with choke, and a 10" hi-hat with foot pedal.'
    },
    {
        model:'yamaha',
        type: 'eletronic',
        image: 'y1.jpg',
        name: 'Yamaha DTX-10',
        description: 'Modelo DTX top de linha, ostenta a beleza de uma bateria de verdade" Modelo DTX top de linha, a série DTX10 combina a funcionalidade da bateria eletrônica com a beleza da bateria acústica. A série DTX10 nasceu da tecnologia e da sensibilidade que a Yamaha cultivou ao longo dos vários anos na fabricação de baterias.'
    },
    {
        model:'yamaha',
        type: 'eletronic',
        image: 'y2.jpg',
        name: 'Yamaha DTX-6',
        description: 'O novo módulo DTX-PRO incorpora as melhores funções de treino já incluídas nos modelos anteriores da DTX. Além do sofisticado metrônomo programável, o módulo está equipado com um gravador completo e intuitivo, 10 funções para praticar e estudar, bem como 37 músicas que permitem aprender vários estilos. As funções de treino e estudo da DTX6 são uma importante ferramenta para bateristas de todos os níveis.'
    },
    {
        model:'rolland',
        type: 'eletronic',
        image: 'r1.jpg',
        name: 'Roland TD-50KV2',
        description: 'O kit Flagship TD-50KV2 representa o auge da inovação V-Drums, oferecendo uma experiência de bateria eletrônica mais completa para tocar em qualquer lugar.  A última geração em módulos de som TD-50X responde de forma rica e expressiva a cada batida, com ferramentas de edição inclusas que irão permitir você customizar o som da bateria para qualquer situação. Se você procura pelo um kit eletrônico mais avançado de todos, você acabou de encontrar a TD-50KV2.'
    },
    {
        model:'rolland',
        type: 'eletronic',
        image: 'r2.jpg',
        name: 'Roland TD-17 Series',
        description: 'Quando você leva a bateria a sério, precisa de um kit que combine com sua ambição. A série V-Drums TD-17 permite que sua técnica sobressaia, apoiada em ferramentas de treino capazes de te ajudar muito. A combinação do motor sonoro derivado da TD-50 e o desenvolvimento de novos pads, resulta em um kit de bateria eletrônica com excelente custo benefício e pegada muito próxima de uma bateria acústica - reproduzindo com precisão a sensação física, o toque das baquetas e o controle de mãos e pés que todo baterista precisa.'
    },
    {
        model:'rolland',
        type: 'eletronic',
        image: 'r2.jpg',
        name: 'Roland TD-1KV',
        description: 'Misturando sonoridade superior, pegada autêntica e durabilidade, os kits da linha V-Drums proporcionam altíssimo nível de qualidade – uma herança de mais de três décadas no desenvolvimento de baterias eletrônicas. A compacta TD-1KV não é exceção, com a respeitada qualidade das V-Drums na forma de um kit compacto que continua acompanhando você à medida que sua performance evolui.'
    },
]

export const Drums = {
    getAll: () => {
        return data;
    },
    getFromType: (type: DrumsType): Drums[] => {
        return data.filter(item => item.type === type)
    },
    getFromModel: (model: DrumsType): Drums[] => {
        return data.filter(item => item.model === model)
    },
    getFromName: (name: string): Drums[] => {
        return data.filter(item => item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1);
    }
}
