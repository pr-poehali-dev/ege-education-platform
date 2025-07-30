import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const subjects = [
    "Русский язык", "Математика", "Обществознание", "История", 
    "Информатика", "Химия", "Биология", "Английский язык"
  ];

  const courses = [
    {
      title: "Лайт",
      description: "🪶 Базовое заклинание знаний",
      details: "Теория + тесты для начинающих волшебников",
      duration: "3 месяца",
      format: "Групповые занятия в Telegram",
      price: "от 12 000 ₽",
      features: ["Основные заклинания теории", "Волшебные домашние задания", "Поддержка куратора-мага"],
      house: "hufflepuff"
    },
    {
      title: "Стандарт",
      description: "⚡ Магия среднего уровня",
      details: "Практика + чат с куратором",
      duration: "6 месяцев",
      format: "Мини-группы волшебников",
      price: "от 22 000 ₽",
      features: ["Все заклинания программы", "Магические пробники", "Личная сова-консультант"],
      house: "ravenclaw"
    },
    {
      title: "Профи",
      description: "🔮 Высшая школа магии",
      details: "Индивидуальные занятия + материалы",
      duration: "9 месяцев",
      format: "Личный наставник-волшебник",
      price: "от 42 000 ₽",
      features: ["Продвинутые заклинания", "Еженедельные магические тесты", "Персональный волшебный наставник"],
      house: "slytherin"
    },
    {
      title: "ВИП",
      description: "👑 Директорский уровень",
      details: "Личный наставник + куратор 24/7",
      duration: "12 месяцев",
      format: "1-на-1 с магистром",
      price: "от 72 000 ₽",
      features: ["Секретные заклинания успеха", "Магическая поддержка 24/7", "Гарантия поступления в лучшие вузы"],
      house: "gryffindor"
    }
  ];

  const teachers = [
    {
      name: "Профессор Дмитрий Северус",
      subject: "Магия математики",
      experience: "15 лет",
      avgScore: "89 баллов",
      description: "Бывший составитель заданий ЕГЭ, знает все секреты экзаменационной магии",
      image: "/img/1a74b6f6-3352-473f-b5e3-0640cea5421f.jpg"
    },
    {
      name: "Профессор Елена Макгонна",
      subject: "Зельеварение русского языка",
      experience: "12 лет",
      avgScore: "87 баллов",
      description: "Мастер словесных заклинаний и бывший эксперт ФИПИ",
      image: "/img/5b3a4630-0eb8-4dbc-8359-4522a20eccb5.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Гарри П.",
      subject: "История магии",
      score: "94 балла",
      year: "2024",
      text: "Скулгвардс помог мне раскрыть магический потенциал! Теперь я учусь в МГУ на бюджете благодаря волшебным методикам преподавателей.",
      image: "/img/d6e91797-b2ff-40e3-af55-c1a16757e47c.jpg"
    }
  ];

  const getHouseColors = (house: string) => {
    const colors = {
      gryffindor: "bg-gryffindor text-gryffindor-gold border-gryffindor-gold",
      slytherin: "bg-slytherin text-slytherin-silver border-slytherin-silver",
      ravenclaw: "bg-ravenclaw text-ravenclaw-bronze border-ravenclaw-bronze",
      hufflepuff: "bg-hufflepuff text-hufflepuff-brown border-hufflepuff-brown"
    };
    return colors[house as keyof typeof colors] || colors.gryffindor;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-magical-dark to-slate-900 text-white">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-magical-dark/95 backdrop-blur-sm border-b border-gryffindor-gold/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gryffindor-gold rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-gryffindor" size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold text-gryffindor-gold">Скулгвардс</span>
                <p className="text-xs text-gray-300 magical-text">Онлайн-школа волшебства ЕГЭ/ОГЭ</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#courses" className="text-gray-300 hover:text-gryffindor-gold transition-colors magical-text">Курсы</a>
              <a href="#teachers" className="text-gray-300 hover:text-gryffindor-gold transition-colors magical-text">Преподаватели</a>
              <a href="#reviews" className="text-gray-300 hover:text-gryffindor-gold transition-colors magical-text">Отзывы</a>
              <a href="#about" className="text-gray-300 hover:text-gryffindor-gold transition-colors magical-text">О нас</a>
              <a href="#contacts" className="text-gray-300 hover:text-gryffindor-gold transition-colors magical-text">Контакты</a>
            </div>
            <Button className="bg-gryffindor hover:bg-gryffindor/80 text-gryffindor-gold border border-gryffindor-gold">
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </nav>

      {/* Героическая секция */}
      <section className="py-20 bg-gradient-to-br from-gryffindor/20 to-magical-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/f601af4a-1815-42c6-a8df-f7d2cd93b0aa.jpg" 
              alt="Герб Скулгвардс" 
              className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-gryffindor-gold shadow-2xl"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gryffindor-gold mb-6 leading-tight">
            Скулгвардс
          </h1>
          <p className="text-2xl text-gray-300 mb-4 magical-text">
            ✨ Твоя волшебная сила — знания ✨
          </p>
          <p className="text-xl text-gray-400 mb-8 magical-text">
            Подготовься к экзамену, как волшебник!
          </p>
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-black/30 backdrop-blur-sm border border-gryffindor-gold/30 rounded-lg p-6">
              <p className="text-lg text-gray-300 magical-text">
                🧙‍♂️ В нашей академии работают 2 магистра-эксперта, которые до 2022 года были составителями 
                заданий ЕГЭ и ОГЭ. Они знают все секретные заклинания успешной сдачи экзаменов!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gryffindor hover:bg-gryffindor/80 text-gryffindor-gold border border-gryffindor-gold text-lg px-8 py-4 shadow-lg">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Выбрать магическое обучение
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gryffindor-gold text-gryffindor-gold hover:bg-gryffindor-gold hover:text-gryffindor text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram-канал
            </Button>
          </div>
        </div>
      </section>

      {/* Предметы */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gryffindor-gold">Магические дисциплины</h2>
          <p className="text-center text-gray-400 mb-12 magical-text">Освой заклинания знаний по всем предметам</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="text-center p-6 bg-black/20 border border-gryffindor-gold/20 rounded-lg hover:border-gryffindor-gold/50 transition-all hover:shadow-lg hover:shadow-gryffindor-gold/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gryffindor/20 rounded-full flex items-center justify-center">
                  <Icon name="BookOpen" className="text-gryffindor-gold" size={28} />
                </div>
                <span className="font-medium text-gray-300 magical-text">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Курсы */}
      <section id="courses" className="py-20 bg-magical-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-6 text-gryffindor-gold">Магические курсы</h2>
          <p className="text-center text-gray-400 mb-16 magical-text text-lg">Выбери свой путь к вершинам знаний</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 bg-black/40 backdrop-blur-sm hover:shadow-xl hover:shadow-gryffindor-gold/20 transition-all ${getHouseColors(course.house)}`}>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gryffindor-gold/20 rounded-full flex items-center justify-center">
                    <Icon name="Crown" className="text-gryffindor-gold" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-gryffindor-gold">{course.title}</CardTitle>
                  <CardDescription className="text-base magical-text text-gray-300">{course.description}</CardDescription>
                  <p className="text-sm text-gray-400 magical-text">{course.details}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Icon name="Clock" size={16} className="mr-3 text-gryffindor-gold" />
                      <span className="magical-text">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Icon name="Users" size={16} className="mr-3 text-gryffindor-gold" />
                      <span className="magical-text">{course.format}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-300">
                        <Icon name="Sparkles" size={14} className="mr-3 text-gryffindor-gold mt-0.5 flex-shrink-0" />
                        <span className="magical-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-600">
                    <div className="text-3xl font-bold text-gryffindor-gold mb-4 text-center">{course.price}</div>
                    <Button className="w-full bg-gryffindor hover:bg-gryffindor/80 text-gryffindor-gold border border-gryffindor-gold">
                      <Icon name="Wand2" size={16} className="mr-2" />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преподаватели */}
      <section id="teachers" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-6 text-gryffindor-gold">Магистры знаний</h2>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="bg-black/30 backdrop-blur-sm border border-gryffindor-gold/30 rounded-lg p-8">
              <p className="text-xl text-gray-300 magical-text leading-relaxed">
                🧙‍♂️ Среди наших преподавателей — бывшие составители КИМов ЕГЭ и ОГЭ, работавшие в ФИПИ до 2022 года. 
                Они владеют древними секретами экзаменационной магии и знают все заклинания успешной сдачи!
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-black/40 border-2 border-gryffindor-gold/30 backdrop-blur-sm text-center hover:shadow-xl hover:shadow-gryffindor-gold/20 transition-all">
                <CardHeader>
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover rounded-full border-4 border-gryffindor-gold shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gryffindor rounded-full border-2 border-gryffindor-gold flex items-center justify-center">
                      <Icon name="Star" className="text-gryffindor-gold" size={20} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gryffindor-gold mb-2">{teacher.name}</CardTitle>
                  <CardDescription className="text-lg text-gray-300 magical-text font-medium">{teacher.subject}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center gap-4">
                    <Badge className="bg-gryffindor/20 text-gryffindor-gold border border-gryffindor-gold/50 magical-text">
                      {teacher.experience}
                    </Badge>
                    <Badge className="bg-slytherin/20 text-slytherin-silver border border-slytherin-silver/50 magical-text">
                      {teacher.avgScore}
                    </Badge>
                  </div>
                  <p className="text-gray-400 magical-text leading-relaxed">
                    {teacher.description}
                  </p>
                  <div className="flex justify-center">
                    <Icon name="Award" className="text-gryffindor-gold" size={24} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20 bg-magical-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-6 text-gryffindor-gold">Свитки славы</h2>
          <p className="text-center text-gray-400 mb-16 magical-text text-lg">Истории успеха наших выпускников-волшебников</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/40 border-2 border-gryffindor-gold/30 backdrop-blur-sm hover:shadow-xl hover:shadow-gryffindor-gold/20 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gryffindor-gold">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gryffindor-gold">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-300 magical-text">
                        {testimonial.subject} — {testimonial.score}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 magical-text italic mb-4 leading-relaxed">
                    "✨ {testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-gryffindor-gold">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 magical-text">{testimonial.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-gryffindor-gold">О академии Скулгвардс</h2>
            <div className="bg-black/30 backdrop-blur-sm border border-gryffindor-gold/30 rounded-lg p-8 mb-12">
              <p className="text-xl text-gray-300 magical-text leading-relaxed mb-6">
                🏰 Академия магических знаний Скулгвардс специализируется на обучении древним искусствам 
                ЕГЭ и ОГЭ уже более 10 лет. Наш подход основан на волшебстве знаний и постоянной практике заклинаний успеха.
              </p>
              <p className="text-lg text-gray-400 magical-text">
                Все занятия проходят в удобной платформе Telegram — как по волшебству, всегда под рукой! 📱✨
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-black/20 border border-gryffindor-gold/20 rounded-lg p-6">
                <div className="text-5xl font-bold text-gryffindor-gold mb-2">2847</div>
                <div className="text-gray-300 magical-text">Выпускников-волшебников</div>
                <Icon name="GraduationCap" className="text-gryffindor-gold mx-auto mt-3" size={28} />
              </div>
              <div className="text-center bg-black/20 border border-gryffindor-gold/20 rounded-lg p-6">
                <div className="text-5xl font-bold text-gryffindor-gold mb-2">87</div>
                <div className="text-gray-300 magical-text">Средний балл магии</div>
                <Icon name="Trophy" className="text-gryffindor-gold mx-auto mt-3" size={28} />
              </div>
              <div className="text-center bg-black/20 border border-gryffindor-gold/20 rounded-lg p-6">
                <div className="text-5xl font-bold text-gryffindor-gold mb-2">94%</div>
                <div className="text-gray-300 magical-text">Сдали на 80+ баллов</div>
                <Icon name="Sparkles" className="text-gryffindor-gold mx-auto mt-3" size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-magical-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gryffindor-gold">Магическая связь</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="bg-black/30 backdrop-blur-sm border border-gryffindor-gold/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gryffindor-gold mb-6 magical-text">Способы связи</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gryffindor/20 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-gryffindor-gold" size={20} />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300 magical-text">Telegram</span>
                      <p className="text-sm text-gray-400">Основная платформа обучения</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gryffindor/20 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-gryffindor-gold" size={20} />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300 magical-text">magic@skulguards.ru</span>
                      <p className="text-sm text-gray-400">Магическая почта</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gryffindor/20 rounded-full flex items-center justify-center">
                      <Icon name="MessageSquare" className="text-gryffindor-gold" size={20} />
                    </div>
                    <div>
                      <span className="text-lg text-gray-300 magical-text">WhatsApp</span>
                      <p className="text-sm text-gray-400">Быстрая связь с кураторами</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="w-full bg-gradient-to-r from-gryffindor to-gryffindor/80 text-gryffindor-gold border border-gryffindor-gold text-lg py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Перейти в Telegram-канал
                  </Button>
                </div>
              </div>
            </div>
            <Card className="bg-black/40 border-2 border-gryffindor-gold/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gryffindor-gold">Магический свиток заявки</CardTitle>
                <CardDescription className="text-gray-300 magical-text">Получи бесплатную консультацию мага-куратора</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 magical-text">Твоё волшебное имя</label>
                  <input className="w-full p-3 bg-black/20 border border-gryffindor-gold/30 rounded-md mt-1 text-white focus:border-gryffindor-gold focus:outline-none" placeholder="Как к тебе обращаться?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 magical-text">Магический кристалл связи</label>
                  <input className="w-full p-3 bg-black/20 border border-gryffindor-gold/30 rounded-md mt-1 text-white focus:border-gryffindor-gold focus:outline-none" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 magical-text">Предмет изучения</label>
                  <select className="w-full p-3 bg-black/20 border border-gryffindor-gold/30 rounded-md mt-1 text-white focus:border-gryffindor-gold focus:outline-none">
                    <option>Выбери магическую дисциплину</option>
                    {subjects.map((subject, index) => (
                      <option key={index}>{subject}</option>
                    ))}
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-gryffindor to-gryffindor/80 text-gryffindor-gold border border-gryffindor-gold text-lg py-3">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Отправить магическую заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black/60 border-t border-gryffindor-gold/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gryffindor-gold rounded-full flex items-center justify-center">
                  <Icon name="Zap" className="text-gryffindor" size={20} />
                </div>
                <div>
                  <span className="text-xl font-bold text-gryffindor-gold">Скулгвардс</span>
                  <p className="text-xs text-gray-400 magical-text">Академия волшебства ЕГЭ/ОГЭ</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm magical-text">
                Магическая подготовка к экзаменам с гарантией поступления в лучшие вузы волшебного мира
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gryffindor-gold">Магические курсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="magical-text">🪶 Лайт</li>
                <li className="magical-text">⚡ Стандарт</li>
                <li className="magical-text">🔮 Профи</li>
                <li className="magical-text">👑 ВИП</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gryffindor-gold">Дисциплины</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="magical-text">Зельеварение русского языка</li>
                <li className="magical-text">Магия математики</li>
                <li className="magical-text">Чары обществознания</li>
                <li className="magical-text">История магии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gryffindor-gold">Магическая связь</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="magical-text">📱 Telegram-академия</li>
                <li className="magical-text">📧 magic@skulguards.ru</li>
                <li className="magical-text">💬 WhatsApp поддержка</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gryffindor-gold/20 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500 magical-text">
              &copy; 2024 Академия Скулгвардс. Все магические права защищены заклинаниями. ⚡✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;