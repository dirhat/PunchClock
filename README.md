# M223: Punchclock
Dies ist eine Beispielapplikation für das Modul M223.

Aufgabe der Applikation:
In der Applikation, kann man entries erstellen.
In der Datenbank kann man überprüfen, ob es erstellt wurde. 

## Loslegen
Folgende Schritte befolgen um loszulegen:
1. Sicherstellen, dass JDK 11 oder 12 installiert und in der Umgebungsvariable `path` definiert ist.
2. Ins Verzeichnis der Applikation wechseln und über die Kommandozeile mit `./gradlew bootRun` oder `./gradlew.bat bootRun` starten
3. Unittest mit `./gradlew test` oder `./gradlew.bat test` ausführen.
4. Ein ausführbares JAR kann mit `./gradlew bootJar` oder `./gradlew.bat bootJar` erstellt werden.

Folgende Dienste stehen während der Ausführung im Profil `dev` zur Verfügung:
- REST-Schnittstelle der Applikation: http://localhost:8081
- Dashboard der H2 Datenbank: http://localhost:8081/h2-console