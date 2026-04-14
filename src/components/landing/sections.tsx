import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: (
      <div className="flex flex-col items-start gap-6">
        <img
          src="https://cdn.poehali.dev/projects/cae339ce-93e9-4d7e-9603-d73b9864f5c1/bucket/409709b3-437d-4108-b95b-828efac94081.png"
          alt="ВСБ — группа компаний"
          className="h-20 md:h-28 w-auto object-contain"
        />
        <Badge variant="outline" className="text-white border-white">Профессиональный электромонтаж</Badge>
      </div>
    ),
    title: "Электрика. Безопасность. Автоматизация.",
    showButton: true,
    buttonText: 'Получить расчёт'
  },
  {
    id: 'about',
    title: 'Почему выбирают нас?',
    content: 'Работаем с объектами любой сложности — от частных домов до промышленных предприятий. Проектируем, монтируем и вводим в эксплуатацию «под ключ». Все работы выполняются в строгом соответствии с нормами ПУЭ и ГОСТ.'
  },
  {
    id: 'services',
    title: 'Наши услуги',
    content: 'Электромонтажные работы · Видеонаблюдение · Пожарная сигнализация · СКУД · Умный дом · Автоматизация производства · Проектирование'
  },
  {
    id: 'cases',
    title: 'Реализованные объекты',
    content: 'За плечами — сотни завершённых проектов: жилые комплексы, офисные центры, склады, заводы и частные дома.',
    gallery: [
      { src: 'https://cdn.poehali.dev/projects/cae339ce-93e9-4d7e-9603-d73b9864f5c1/files/0f6a771c-85f3-47d3-8350-00e33769890f.jpg', label: 'Электромонтаж БЦ' },
      { src: 'https://cdn.poehali.dev/projects/cae339ce-93e9-4d7e-9603-d73b9864f5c1/files/d5a5fee7-db43-4e3a-812b-b54210def290.jpg', label: 'Видеонаблюдение' },
      { src: 'https://cdn.poehali.dev/projects/cae339ce-93e9-4d7e-9603-d73b9864f5c1/files/10d06340-c5f6-4881-ad46-409e70acaa34.jpg', label: 'Умный дом' },
      { src: 'https://cdn.poehali.dev/projects/cae339ce-93e9-4d7e-9603-d73b9864f5c1/files/4cd07182-070c-4a4e-9904-0cf122d56543.jpg', label: 'Пожарная сигнализация' },
    ]
  },
  {
    id: 'contact',
    title: 'Обсудим ваш проект',
    content: 'Оставьте заявку — наш инженер свяжется с вами в течение часа, проведёт бесплатную консультацию и рассчитает стоимость работ.',
    showButton: true,
    buttonText: 'Получить расчёт'
  },
]