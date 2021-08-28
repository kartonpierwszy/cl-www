### Spotkanie w dniu 2021.08.23, godz 17.

1. Ładowanie elementów strony za pomocą php include/require: menu top, menu bottom, q&a, opinie?
   pozbierać te same dane do jednego head, a rozne info osobno head do kazdej podstrony php
2. Q&A będą na kilku podstronach. Wasztaty x 1/Szkolenia x 4/Zabiegix2. Na każdej będzie sekcja z q&a dla potencjalnych uczestników szkoleń. Czy Warto ładować to zewnętrznego pliku, jak to zrobić? php/js?
3. Podstrony typowo tekstowe, jak regulamin, jak je ogarnąć. Koncepcja jest taka, że jest spis treści/wszystkie punkty regulaminu, klikając w nie rozwija się treść tego punktu. Jak to zrobić? PHP? ładowanie tekstu z pliku? czy może w js łatwiej/lepiej?

odp: ważne, żeby treść była ładowana z serwera za pomocą php, wysyłana do przeglądarki, a tam za pomocą css+js ukrywać treści pod linkami.
Warto też - w php pętla do wyświetlania treści z tablicy punktów regulaminu. sprawdz!! 4. Bezpieczeństwo strony? jakieś zabezpieczenia? na co zwracać uwagę? 5. Deployment (np. heroku) - czy ma sens przy tak małym projekcie?
odp: narazie niewarto - może kiedyś. 6. Css - czy jest sens korzystać z Less/Sass? Narazie nie. 7. Pliki css, czy robić do każdego szablonu/podstrony osobny plik i na koniec je łączyć? automatyzacja do 1-go pliku css? 8. Optymalizacja strony, zapytania do serwera, jak minimalizować? 9. Sekcja HEAD w plikach zewnętrznych php, czy ma jakąśwartość, co w niej zostawić? 10. Jak zrobić te przyciski z layoutu, z kresek. svg? 11. Jak ładować fonty google? w plikach html/php czy css poprzez import czy ściągać fonty do folderu? 12. Sekcja z instagramem, w czym to zrobić?
