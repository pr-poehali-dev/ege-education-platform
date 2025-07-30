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
      description: "Базовая подготовка для начинающих",
      duration: "3 месяца",
      format: "Групповые занятия",
      price: "от 15 000 ₽",
      features: ["Основные темы", "Домашние задания", "Поддержка куратора"]
    },
    {
      title: "Стандарт",
      description: "Полноценная подготовка к экзаменам",
      duration: "6 месяцев",
      format: "Мини-группы",
      price: "от 25 000 ₽",
      features: ["Все темы программы", "Пробные экзамены", "Индивидуальная консультация"]
    },
    {
      title: "Профи",
      description: "Интенсивная подготовка на высокие баллы",
      duration: "9 месяцев",
      format: "Индивидуальные занятия",
      price: "от 45 000 ₽",
      features: ["Углубленная программа", "Еженедельные тесты", "Личный наставник"]
    },
    {
      title: "ВИП",
      description: "Максимальная подготовка с гарантией",
      duration: "12 месяцев",
      format: "1-на-1 с экспертом",
      price: "от 75 000 ₽",
      features: ["Авторская методика", "Психологическая поддержка", "Гарантия результата"]
    }
  ];

  const teachers = [
    {
      name: "Елена Викторовна",
      subject: "Русский язык",
      experience: "12 лет",
      avgScore: "87 баллов",
      image: "/img/8d76613c-1476-4fb0-bbee-68525574ab5e.jpg"
    },
    {
      name: "Дмитрий Александрович",
      subject: "Математика",
      experience: "15 лет",
      avgScore: "89 баллов",
      image: "/img/3b34cf40-5dd5-4298-9e29-0ad811a08301.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Анна С.",
      subject: "Обществознание",
      score: "92 балла",
      year: "2024",
      text: "Благодаря курсам смогла поступить в МГУ на бюджет. Преподаватели объясняют очень доступно!",
      image: "/img/7d718afa-7e7b-4dd2-bc0e-884e703caabc.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="text-secondary" size={32} />
              <span className="text-xl font-bold text-primary-foreground">ЕГЭ.Эксперт</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#courses" className="text-primary-foreground hover:text-secondary transition-colors">Курсы</a>
              <a href="#teachers" className="text-primary-foreground hover:text-secondary transition-colors">Преподаватели</a>
              <a href="#reviews" className="text-primary-foreground hover:text-secondary transition-colors">Отзывы</a>
              <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">О нас</a>
              <a href="#contacts" className="text-primary-foreground hover:text-secondary transition-colors">Контакты</a>
            </div>
            <Button variant="secondary" className="font-medium">
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </nav>

      {/* Героическая секция */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Подготовим к ЕГЭ и ОГЭ<br />
            <span className="text-secondary">на 80+ с гарантией</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            В нашей команде — 2 эксперта, которые до 2022 года были разработчиками заданий ЕГЭ и ОГЭ. 
            Они точно знают, как устроен экзамен и что будет на нём в этом году.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Выбрать курс
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Icon name="Play" size={20} className="mr-2" />
              Бесплатное занятие
            </Button>
          </div>
        </div>
      </section>

      {/* Предметы */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Предметы подготовки</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg hover:shadow-md transition-shadow">
                <Icon name="Book" className="mx-auto mb-3 text-primary" size={32} />
                <span className="font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Курсы */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Форматы курсов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-muted-foreground" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" size={16} className="mr-2 text-muted-foreground" />
                      {course.format}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={14} className="mr-2 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-primary mb-3">{course.price}</div>
                    <Button className="w-full">Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преподаватели */}
      <section id="teachers" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Наши преподаватели</h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
            Среди наших преподавателей — бывшие составители КИМов ЕГЭ и ОГЭ, работавшие в ФИПИ до 2022 года.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{teacher.subject}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-center gap-4">
                    <Badge variant="secondary">{teacher.experience}</Badge>
                    <Badge variant="outline">{teacher.avgScore}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Бывший эксперт ФИПИ, средний балл учеников превышает 85 баллов
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Отзывы учеников</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.subject} — {testimonial.score}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="mt-4 flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{testimonial.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">О нашей школе</h2>
            <p className="text-lg mb-12 text-muted-foreground">
              Мы специализируемся на подготовке к ЕГЭ и ОГЭ уже более 10 лет. 
              Наш подход основан на глубоком понимании экзаменационного процесса и постоянной практике.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2847</div>
                <div className="text-muted-foreground">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">87</div>
                <div className="text-muted-foreground">Средний балл</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">94%</div>
                <div className="text-muted-foreground">Сдали на 80+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Phone" className="text-primary" size={24} />
                <span className="text-lg">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Mail" className="text-primary" size={24} />
                <span className="text-lg">info@ege-expert.ru</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" className="text-primary" size={24} />
                <span className="text-lg">г. Москва, ул. Тверская, 15</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <Button variant="outline" size="sm">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Связаться с нами</CardTitle>
                <CardDescription>Получите бесплатную консультацию</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Имя</label>
                  <input className="w-full p-2 border rounded-md mt-1" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium">Телефон</label>
                  <input className="w-full p-2 border rounded-md mt-1" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="text-sm font-medium">Предмет</label>
                  <select className="w-full p-2 border rounded-md mt-1">
                    <option>Выберите предмет</option>
                    {subjects.map((subject, index) => (
                      <option key={index}>{subject}</option>
                    ))}
                  </select>
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" className="text-secondary" size={24} />
                <span className="text-lg font-bold">ЕГЭ.Эксперт</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональная подготовка к ЕГЭ и ОГЭ с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Лайт</li>
                <li>Стандарт</li>
                <li>Профи</li>
                <li>ВИП</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Предметы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Русский язык</li>
                <li>Математика</li>
                <li>Обществознание</li>
                <li>История</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@ege-expert.ru</li>
                <li>г. Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 ЕГЭ.Эксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;