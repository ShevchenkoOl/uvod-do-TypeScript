### Installing and configuring the development environment:
1. we will use [Node.js](https://nodejs.org/en/) to install and configure the development environment;
2. install __TypeScript__ using __Node Package Manager (npm)__, which is automatically installed with Node.js: ```npm install -g typescript```.
This command installs TypeScript globally on your computer, allowing you to use it in any project;
3. to work with TypeScript, I recommend using [Visual Studio Code (VS Code)](https://code.visualstudio.com/).
### Now we have everything we need to get started with TypeScript! You can create a new TypeScript file with the .ts extension and start writing code.
```test.ts```
```html
function add(num1: number, num2: number) {
  return num1 + num2;
}
add(1, 1); ```
Let's compile it in the console using the command:
```tsc test.ts```






![social-profile](./assets/social-profile.png)

### Popis komponenty ```<Profile>```
Komponenta by měla přijmout několik požadavků (props) s informacemi o uživateli:
- ```user name``` — uživatelské jméno;
- ```tag``` — tag sociální sítě bez @;
- ```location``` — město a region;
- ```avatar``` je odkaz na obrázek;
- ```stats``` — objekt s informacemi o aktivitě.
  
Komponenta by měla vytvořit prvek DOM následující struktury:
```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```
## Příklad použití:
```html
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```
# Úkol 2 - Sekce statistik
Vytvořte komponentu ```<Statistics>```, která bude zobrazovat statistiky z předávaných props. Například nahrání do cloudu podle typu souboru, návštěvnost webových stránek uživateli v různých zemích, finanční náklady atd. Statistická data jsou v souboru ```data/data.json```.

![statistics ](./assets/statistics.jpg)

### Popis komponenty ```<Statistics>```
Komponenta musí akceptovat dva props ```title``` and ```stats```, které specifikují titul a objekt statistiky:
- ```title``` je nepovinné, a pokud neprojde, nemělo by se vykreslit žádné označení názvu ```<h2>```;
- ```stats``` – pole objektů obsahující informace o prvku statistiky. Může mít libovolný počet prvků;
- Barvu pozadí prvku statistiky v návrhu lze vynechat, nebo lze vytvořit funkci pro generování náhodné barvy.
Komponenta musí vytvořit prvek DOM následující struktury:
```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```
## Příklad použití:
```html
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
```

# Úkol 3 - Seznam přátel
Musíme vytvořit komponentu ```<FriendList>```, pomocí které můžeme zobrazovat informace o přátelích uživatele. Informace o přátelích jsou uloženy v souboru ```data/friends.json```.

![friend-list](./assets/friend-list.jpg)

### Popis komponenty ```<FriendList>```:
Komponenta musí přijmout jednu prop ```přátel``` – pole objektů přátel.

Komponenta by měla vytvořit DOM následující struktury:
```html
<ul class="friend-list">
  <!-- Libovolné množství FriendListItem -->
</ul>
```
### Popis komponenty ```<FriendListItem>```:
Komponenta musí přijmout několik props:
- ```avatar``` – odkaz na avatara;
- ```name``` - jméno přítele;
- ```isOnline``` - boolean označující stav přítele: online nebo ne.
V závislosti na prop ```isOnline``` by se barva pozadí ```span.status``` měla změnit. To lze provést pomocí různých tříd CSS nebo stylizovaných komponent.
Komponenta by měla vytvořit DOM následující struktury:
```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```
## Příklad použití:
```html
import friends from 'path/to/friends.json';

<FriendList friends={friends} />;
```
# Úkol 4 - Historie transakcí
V osobním účtu internetové banky je nutné vytvořit komponentu transakční historie.

![transactions](./assets/transactions.jpg)

Data pro seznam jsou k dispozici ve formátu JSON v souboru ```data/transakce.json```. Toto je pole objektů, kde každý objekt popisuje jednu transakci s následujícími vlastnostmi:
- ```id``` je jedinečný identifikátor transakce;
- ```type``` — typ transakce;
- ```amount``` - částka transakce;
- ```currency``` - typ měny.
### Popis komponenty ```<TransactionHistory>```
Je nutné vytvořit komponentu ```<TransactionHistory>```, která přijímá jednu prop ```item``` - pole transakčních objektů z ```data/transakce.json```. Komponenta vytvoří označení tabulky. Každá transakce je řádek tabulky. Příklad ukazuje označení dvou transakcí:
``` html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```
## Příklad použití:
```html
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```
### Author
This repository was created and maintained by [Oleksii Shevchenko](https://shevchenkool.github.io/portfolio/). Questions, suggestions and feedback can be directed to [email](uzlabini@gmail.com) or [linkedin profile](linkedin.com/in/oleksii-shevchenko-535ab61b8).
If you have any questions or suggestions, feel free to create an [issue](https://github.com/ShevchenkoOl/phonebook/issues) or submit a [pull request](https://github.com/ShevchenkoOl/phonebook/pulls).
