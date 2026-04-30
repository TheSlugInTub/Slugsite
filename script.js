const pages = {
    home: {
        title: 'Home',
        content: `

<h1>HEY THERE!</h1>
<p>
I'm Slugarius and this is my humble abode. This is a site where I express myself and show the world who I am. It's got my art, my projects and my socials on it.
<br>
<br>
It's also themed around midnight commander which is pretty cool.
<br><br>
If you want to contact me please go to the contact page.
<br><br>
I also do art commissions, so if you want to commission me, then please check out my gallery and contact me.<br>
I do $30 USD for a fully rendered piece, $20 for a coloured sketch, $10 for a sketch, and also $10 for a profile picture.
</p>

<p>Current directory: <code>/Home</code></p>

        `
    },
    about: {
        title: 'About',
        content: `

<h1>ABOUT ME!</h1>
<p>

Hey there! I'm Slugarius and I'm an artist and a programmer. 

I started off by making games in Unity with C#, then started using C++ to make my own game engines, then C, and I'm now (semi) working on a game right now.<br>
My favourite language is C but only because C++ takes way too long to compile. And the languages I know are C, C++, C#, and HTML and CSS.<br>
As you can probably tell, I'm more of a desktop applications developer than a web developer and I HATE electron based webapps that could've been a thousand times faster and less clunky had they been a native desktop application.<br>
<br>
As for my art journey, I started off drawing traditionally as a wee lad and then bought some charcoal pencils and started doing charcoal portraits and studies from life.<br>
Then I participated in a programming event called the summer of making where I got an XP-Pen Deco Pro MW drawing tablet and I've been drawing digitally ever since.<br>
<br>
I realize I haven't talked much about who I am so far so let me do that.
Some of my favourite games are:

Pathologic 2, Dark Souls 1 (I hate the second one and I'm just not interested in the third), Undertale, Hollow knight, Minecraft, ULTRAKILL, Portal 2, Half life 2 and Rain World.
<br>
<br>
My favourite movies are Into the Spiderverse and Across the spiderverse. But I like the latter more.
<br>
Also I'm agnostic and a materialist.
<br>
<br>
I'm only really active on discord so if you want to talk to me (which thank you by the way), please do so on my discord which you can find in the contact page.
<br>
<br>
If you want to learn more about me then please read my blog, I am not going to write a paragraph about a taste, preference, struggle or ideal that I think might only be temporary in this about section as I don't want to have to change it too much.
<br>
<br>
I also really like 3d modelling, I used to only be able to model hard surface objects like tables and monitors and character modelling seemed impossible to me until I really tried to do it for my game Atrovein, and then I actually made a good model and I kept creating them. I use blender for modelling, I also make animations, althought I haven't posted any (yet).
<br>
<br>
I use neovim as my text editor with the catppuccin theme! I use zen as my browser!
<br>
<br>
</p>


<p style="background-image: linear-gradient(#ce78eb, #e9ff19);
    color: transparent;
    background-clip: text;">I DON'T BELIEVE IN CONSISTENCY!</p>


<p>
Check out my games at <a href="https://slug-in-tub.itch.io">My Itch.io</a>!<br>
Check out my engines and other programming projects at <a href="https://github.com/TheSlugInTub">My GitHub</a>!<br>
<br>
This is me btw:
<br>
<img src="HaruspexProfile.webp" style="height: 200px;">
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
please talk to me im so lonely
</p>

<p>Current directory: <code>/About</code></p>

`
    },
    projects: {
        title: 'Projects',
        content: `

<h1>MY PROJECTS!</h1>

<p>I'm too tired to write detailed descriptions about these projects so just visit the links.</p>

<a href="https://github.com/TheSlugInTub/Sulkan">Sulkan</a><br>
<a href="https://github.com/TheSlugInTub/Salmon-Engine">Salmon engine</a><br>
<a href="https://github.com/TheSlugInTub/Slote">Slote</a><br><br>

<p>Current directory: <code>/Projects</code></p>

                `
    },
    blog: {
        title: 'Blog',
        content: `

<h1>MY BLOG!</h1>
<p>

# 30/12/2025<br>
I don't have the motivation to do anything. Whenever I open up neovim to work on a project, I close it back down in a matter of minutes. Whenever I get out my drawing tablet to make something, I become disgusted at the quality of what I'm creating for a little while and then give up. Whenever I open up blender to animate, all my drive to do anything vanishes in an instant. The only thing I can bother to do is to watch YouTube videos but even doing that fills me with dread for what I could be doing. I want to do stuff, it's just I can't bring myself to do anything. I'm not even living anymore, I'm just waiting for time to pass. But I'll do something eventually, I hope.<br><br>

# 14/12/2025<br>
Made a cool website, at least I think it is. What do you think?<br>

</p>

<p>Current directory: <code>/Blog</code></p>

        `
    },
    contact: {
        title: 'Contact',
        content: `

<h1>TALK TO ME!</h1>
<p>
I'm mostly active on discord so if you want to contact me then please do so there.<br>But if you're a big bucks company then email me, whatever feels right.
<br>
<a href="https://discord.com/users/889580224352780288">Discord</a>
<a href="mailto:aseedadad@gmail.com">Email</a>

</p>

<p>Current directory: <code>/Contact</code></p>

                `
    },
    docs: {
        title: 'Art',
        content: `

<h1>LOOK AT MY ART!</h1>
<p>Some art I've made.</p>
<img style="height: 300px;" src="art/1.png"><br> 
<img style="height: 300px;" src="art/2.png"><br>
<img style="height: 300px;" src="art/3.png"><br>
<img style="height: 300px;" src="art/4.png"><br>
<img style="height: 300px;" src="art/5.png"><br>

<br><br>
<p>Current directory: <code>/Art</code></p>

        `
    }
};

const fileItems = document.querySelectorAll('.file-item[data-page]');
const contentArea = document.getElementById('content');
const contentHeader = document.getElementById('content-header');

fileItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove selected class from all items
        fileItems.forEach(i => i.classList.remove('selected'));
        
        // Add selected class to clicked item
        this.classList.add('selected');
        
        // Get page data
        const page = this.dataset.page;
        const pageData = pages[page];
        
        // Update content
        contentHeader.textContent = pageData.title;
        contentArea.innerHTML = pageData.content;
    });
});
