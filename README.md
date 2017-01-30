# uan
useless array notation

## why?
i was bored

## how do i use this?
dont

## no, really
fine. there are two sections to a uan file: the keys and the values. they are split by a `:`. each key tells the parser the value type and its location. for example, the first line in the file below tells the parser that there is a string with a value of "one" at the root of the array. depth is counted with dashes. indentation is counted with brackets. they are different because depth tells you how far back to go (if you need to), and indentation tells you how far in to go (if you need to). all key characters after the type declaration are ignored. the three types are string(`"`), number(`#`), and boolean(`/`).
```
key value
|   |
"--:one
[#-:1.5
-"-:two
#--:3
[[":hungry
--/:true
-[":tired
--/:false
```
and in json:
```
[
  "one",
  [
    1.5,
    "two"
  ],
  3,
  [
    [
      "hungry",
      true
    ],
    [
      "tired",
      false
    ]
  ]
]
```

## you didnt tell me how to use it
ughh, fine. just install it with npm, require it, and run `uan(UAN_STRING_HERE)`

## will i ever be able to create uan strings from an array?
no
