Feature: : Library


    Scenario: Correct non-zero number of books found by author
        Given I have the following books in the store
            | title                                 | author      |
            | The devil in the White City           | Erik Larson |
            | The Lion,The Witches and the Wradrobe | C.S Lewis   |
            | In the Garden of Beasts               | Erik Larson |
        When  I search books by author '<author>'
        Then I find <bookcount> books

        Examples:
            | author      | bookcount |
            | Erik Larson | 2         |
            | C.S Lewis   | 1         |