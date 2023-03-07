# Exercices Render Props et Fragments

On souhaite pouvoir personnaliser la façon dont s'affiche l'élément dans le menu du composant `Select` tout en gardant le code proche de ce qu'il est actuellement.

Dans le composant `Select`, ajouter une nouvelle props appelée `formatItem`. Comme dans l'exemple avec `Clock` cette props est optionnel, si on ne la passe pas `Select` se comporte tel qu'il est actuellement.

Si on passe une fonction `formatItem` au niveau de `Home` elle sera appelée depuis la méthode `render` de `Select` avec 2 paramètres :

- l'élément du tableau
- l'indice du tableau (2e param du callback de .map)

Notre but est que chaque item s'affiche avec 2 balises :

- `<b>0: </b><span>Jean</span>`
- `<b>1: </b><span>Paul</span>`
- `<b>2: </b><span>Eric</span>`

Créer la fonction correspondante au niveau de `Home` et l'appeler dans
`Select` en utilisant un Fragment pour ne pas ajouter une balise supplémentaire autour des balises `b` et `span`.

# Exercices sur hooks + context

## Hooks

Transformez `Select` en fonction avec des Hooks

- Utiliser `useState` pour `opened`
- Utiliser `useEffect` pour replacer `componentDidMount` et `componentWillUnmount`
- Utiliser `useRef` pour créer la ref :
https://beta.reactjs.org/reference/react/useRef

## Context

On aimerait que `selectedPrenom` qui est présent dans le state de `Home` soit
accessible au travers d'un context `PrenomContext`.

En vous inspirant de l'exemple suivant :
https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks

Créer un le context `PrenomContext` en vous inspirant de `UserContext`

Créer un composant `PrenomProvider` en vous inspirant de `UserProvider`

"Fournir" le context à l'application au niveau de `App`

Consommer le context avec le hook `useContext` dans `Home`

Consommer également le context avec le hook `useContext` dans `TopBar` pour afficher le prénom dans la `TopBar`

