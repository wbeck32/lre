### Observations

* There's no CTA - no event to trigger the javascript
>Response: This was fixed by wrapping the javascript in a function name, then adding an onclick event to the h1 tag that called the function.

* Console gave me three errors

  a. GET http://localhost/friends.json 403 (Forbidden)
    >Response: I can access /friends.json directly from the browser. This was resolved by removing the forward slash from the fetch parameter.

  b. Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
    >Response: pasted friends.json into json validator, there were no errors. For some reason, based on the message in the console this error is complaining about the first < in the doctype. Not totally clear on how promises work but this error also went away after I changed the path of the friends.json parameter.

  c. GET http://localhost/favicon.ico 403 (Forbidden)
    >Response: this seems to be a Chrome-specific issue. A [Chrome bug](  https://bugs.chromium.org/p/chromium/issues/detail?id=39402#c47) was filed in 2010 and supposedly fixed as of v29, but a lot of people are still reporting that it isn't fixed. I'm using v59.
  It's not an issue in Firefox Developer Edition or Safari but it is in Chromium.

### Suggestions
- Error handling for the fetch function.
- Separate files for css and scripts with appropriate rel links.


### Resources

- [W3C cheat sheet](https://www.w3.org/2009/cheatsheet/)
- [MDN fetch documentation ](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JSON validator](https://jsonformatter.curiousconcept.com/)
