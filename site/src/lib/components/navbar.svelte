<nav>
    <div class="logo">
        <a href="/site/index.html"><img src="/logolong.png" alt="Logo"></a>
    </div>
    <div class="container">
        <ul class="navlinks">
            <li><a href="/site/pages/about.html">Technology</a></li>
            <li><span class="separator"> // </span></li>
            <li><a href="/site/pages/about.html">Solution</a></li>
            <li><span class="separator"> // </span></li>
            <li><a href="/site/pages/about.html">About</a></li>
            <li><span class="separator"> // </span></li>
            <li><a href="/site/pages/about.html">Blog</a></li>
            <li><span class="separator"> // </span></li>
            <li><a href="/site/pages/about.html">Contact</a></li>
        </ul>
    </div>
</nav>

<style lang="scss">

body {
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    background-color: white;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 5px;
    padding-left: 5px;
    background-color: white;
    color: black;
    position: relative;
    z-index: 1;

    .logo {
        flex-basis: 25%;
        text-align: left;
        padding-left: 10px;

        img {
            height: 100px;
            width: auto;
        }
    }

    .container {
        flex-basis: 50%;
        align-items: flex-end;
        
    }

    ul {
        flex-basis: 50%;
        max-width: 500px;
        min-width: 300px;
        display: flex;
        list-style: none;
        margin-left: auto;
        margin-right: 0px;
        align-content: flex-end;
        color: #0091A0;
        height: 100px;
        justify-content: right;
        padding-left: 50px;
    }

    li {
        padding: 0px max(2.5%, 5px);
        font-size: 20px;
    }

    a {
        color: black;
        text-decoration: none;
        &:hover{
            color: #0091A0;
        }
    }

    .separator {
        font-weight: bold;
    }

    .navlinks {

        height: auto;
        position: relative;

        &-contact {
            height: 12%;
            min-width: auto;
        }
    }
}


</style>