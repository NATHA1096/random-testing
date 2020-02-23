# random-testing

## UI/Application Exerciser Monkey en Android

Para esta parte del taller se realizan pruebas monkey sobre Habitica y MyExpenses utilizando ADB Tools de Android. A continuación se muestran gifs con la ejecuación de la pruebas y el comando utilizado para realizarlas.

### Habitica

![alt text](https://github.com/NATHA1096/random-testing/blob/master/Android/habiticaADB.gif)

```
adb shell monkey -p com.habitrpg.android.habitica -v 10000
```

### MyExpenses

![alt text](https://github.com/NATHA1096/random-testing/blob/master/Android/myexpensesADB.gif)

```
adb shell monkey -p org.totschnig.myexpenses -v 10000
```

## Autores

* Nathalia Álvarez
* Ana María Espinosa
