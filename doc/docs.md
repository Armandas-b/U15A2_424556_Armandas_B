# U15-A2: Designing and Developing a page

[HOT BEANS WEB WEBSITE]()

## I. Designing the page

### Identifying user requirements

#### Client Needs

[ ] Company Profile: The page should include a profile of Hot Beans Web, highlighting the company's expertise, achievements, and unique selling points. This section should effectively convey the company's values and establish its credibility among prospective employees.

[ ] Profiles of Existing Trainee Web Developers: The page should feature profiles of current trainee web developers at Hot Beans Web.

[ ] Job Specifications and Required Qualifications: The page should present job specifications for available positions at Hot Beans Web. This section should outline the specific roles, responsibilities, and qualifications required for each position.

[ ] Online Application Form: The page should include an online application form that allows potential candidates to submit their details and apply for available positions directly through the page. The form should be user-friendly and intuitive, simplifying the application.

[ ] Links to Web Development Courses: The page should provide a curated list of relevant web development courses, training programs, or certifications.

#### Target audience and User Needs

The target audience for the page is individuals who have completed training courses or obtained qualifications related to web development and are now looking for a job as a web developer. These individuals are seeking employment opportunities in the field of web development and are likely to have a good understanding of web technologies and industry standards.

The page should provide information about Hot Beans Web and its recruitment needs, as well as the job specifications and required qualifications for available positions.

The page should be user-friendly and intuitive, allowing potential candidates to easily navigate through the content and apply for available positions, thus making the application process as simple and fast as possible.

### Visual designs for the page

To design the concepts of the page I have used Figma. I have created two different designs for the page. The designs were based on the client's requirements and the target audience's needs.

#### Design 1

![Design 1](docIMG\DESIGN1.png)

#### Design 2

![Design 2](docIMG\DESIGN2.png)

### C. Choosing design

#### Design 1

The first design follows a very stale and boring layout. It meets the requirements but at the bare minimum. For a web design company, this would not be very intuitive and attractive.

#### Design 2

The second design follows a more modern and attractive layout. It meets the requirements and is more intuitive and attractive. This design would be more appealing to the target audience.

It also includes responsive design, which is highly important in today's world, and again it would make the company look good at what they do.

#### Final Decision

I have decided to go with Design 2 because it is more modern and attractive. It also includes responsive design and would make the company look good at what they do. It also seems to be more favorable in the feedback I have received.

|Feedback|Name|
|---|---|
|I like the second design more. It is more modern and attractive.|Viktor S.|
|The design is visually appealing and modern, especially with the chosen Design 2. The color scheme and font choice create a professional impression| Saul C.|

### D. Technical documentation

#### Colours and Fonts

The colours used in the design are:

![Colours](docIMG\colours.png)

The fonts used in the design are:

![Fonts](docIMG\font.png)

### E. Justification of design decisions

Colours:

I chose the deep blue colour (#0F4C81) to evoke a sense of professionalism, trust, and stability. It complements the nature of our web development company and creates a visually appealing contrast with other elements on the website.

To add energy and sophistication, I included a vibrant gold colour (#FFD700). This colour helps draw attention to important elements like job listings or application forms, acting as a visual cue for users.

For a neutral background that allows other colours and content to stand out, I opted for a light gray colour (#E9E7E7). It creates a clean and modern aesthetic while ensuring readability and visual balance.

In terms of font choice, I selected Open Sans. It is a versatile and widely-used font known for its readability and compatibility across devices and browsers. Its clean and modern design aligns well with our desired professional and contemporary image.

To establish visual hierarchy and emphasize important elements, I used different font sizes. Larger sizes were applied to headings to make them stand out, while smaller sizes were used for body text to ensure readability and maintain a consistent visual style.

These design choices, combining the colours #0F4C81, #FFD700, and #E9E7E7 with the Open Sans font in different sizes, aim to create a visually appealing and professional website. The colour scheme helps establish a strong brand identity, while the font choice and size variations contribute to readability and hierarchy of information. Overall, these design choices align with our objective of attracting potential web developers and providing an engaging user experience.

## III. Developing and Testing the page

### A. page development process

In the development process, I utilized my designs and Bootstrap Studio to create an effective and visually appealing website. Here's how I incorporated these elements:

Design Implementation: I translated my designs into actual web pages, ensuring accuracy in layout, colours, fonts, and design elements.

Bootstrap Studio Integration: I utilized Bootstrap Studio's drag-and-drop interface to quickly construct the web pages, leveraging its pre-designed components for headers, footers, navigation menus, and forms.

Responsive Design: I ensured that the website is responsive across different devices and screen sizes, using Bootstrap Studio's responsive design tools to adjust the layout and content accordingly.

Customization and Styling: I customized colours, fonts, and styles in Bootstrap Studio to maintain consistency and visual harmony throughout the website.

### B. Ensuring functionality, compatibility, and usability

#### Functionality

The website is fully functional and meets all the requirements outlined in the design brief. It includes a company profile, profiles of existing trainee web developers, job specifications, an online application form, and links to web development courses.

Company profile/description:
![Company Profile](docIMG\companyProfile.png)

Profiles of existing trainee web developers:

![Profiles of existing trainee web developers](docIMG\profiles.png)

Job specifications:

![Job specifications](docIMG\jobSpecs.png)

Online application form:

![Online application form](docIMG\form.png)

Links to web development courses:

![Links to web development courses](docIMG\courses.png)

#### Compatibility

The website is compatible with all major browsers, including Chrome, Firefox, Safari, and Edge. It is also compatible with mobile devices and tablets, ensuring a consistent user experience across different platforms.

| Browser |Version| Compatibility |
| ------- |---- |------------- |
| Chrome  | 113.0.5672.126 |  Working as intended   |
| Firefox |  113.0.1 (64-bit)| Working as intended |
| Edge | 113.0.1774.42 | Working as intended |

Webpage responsiveness:

Mobile:

In the mobile view this example section('Our Staff') changes to a carousel

![Webpage responsiveness](docIMG\responsive.png)

Desktop:

In the desktop view this example section('Our Staff') changes to a static 3 image section

![Webpage responsiveness](docIMG\responsive2.png)

#### Usability

The website is easy to navigate and use, with an easy-to-use navigation bar and simple layout. It is also responsive, which means that the website can be accessible on various devices and screen sizes. This ensures a consistent user experience across different platforms.

### C. Testing the page

The website is compatible with all major browsers, including Chrome, Firefox and Edge. It is also compatible with mobile devices and tablets, ensuring a consistent user experience across different platforms.

The website is responsive across different devices and screen sizes, ensuring a consistent user experience across different platforms.

Form testing:

| Test | Result | Notes |
| ---- | ------ | ----- |
| Filling out form with valid data | Success | The form with valid data works successfully. Screenshots: ![ValidForm](docIMG/ValidForm.png) ![SuccessModal](docIMG/SUCCESSMODAL.png)|
| Filling out form with invalid data | Success | The form with invalid data is not allowed to be submitted, but the user is not notified of this. The only indication that it is invalid is the discoloured submit button.![InvalidForm](docIMG/InvalidForm.png)|
| Filling out form with no data | Success | The form with no data is not allowed to be submitted, but the user is not notified of this. The only indication that it is invalid is the discoloured submit button.![NoDataForm](docIMG/NoDataForm.png)|

|Feedback|Name|
|--------|----|
|The implemented sections, such as the company profile, trainee profiles, job specifications, and online application form, work well. However, the form validation could be improved by providing clearer feedback to users when invalid data is entered. | Saul C. |

#### Improvements

The form validation could be improved by adding a message to the user when the form is invalid. This would help the user understand why the form is invalid and how to fix it.

## IV. Optimization

I utilized image compression techniques to reduce the file sizes of images used on the page without compromising their visual quality. By compressing the images, I aimed to minimize the amount of data that needs to be loaded when accessing the page, resulting in faster load times and improved user experience.

To improve performance, I focused on optimizing the page's images and code. By compressing the images and applying code optimization techniques, I managed to reduce the overall size of the page from 19MB to 15.7MB, representing a reduction of approximately 17%.

| Type | Size(MB) |
| ---- | -------- |
| Unoptimized | 19 MB |
| Optimized | 15.7 MB |

Through image compression and code optimization, I achieved a notable reduction in file size, resulting in improved performance and faster loading times for the website.

## V. Evaluation

In terms of visual design, I selected a colour scheme that reflects professionalism and trust. The deep blue (#0F4C81) conveys a sense of stability, while the vibrant gold (#FFD700) adds energy and sophistication. The light gray (#E9E7E7) serves as a neutral background, allowing other elements to stand out. For the font, I chose Open Sans for its readability and compatibility across devices.

In the technical documentation, I provided clear information about the colours and fonts used in the design. I justified my design choices, explaining how they align with our goal of attracting potential web developers and creating a visually appealing website.

During the development process, I effectively translated my designs into web pages using Bootstrap Studio. I ensured responsiveness across different devices and kept true to the colours, fonts, and styles to maintain consistency and visual harmony throughout the website.

The developed web pages meet all the requirements outlined in the design brief. They include a company profile, profiles of trainee web developers, job specifications, an online application form, and links to web development courses. The website is compatible with major browsers and provides a user-friendly experience.

I have considered factors such as image compression, caching, and code minification to enhance the website's performance. By optimizing the website, I managed to reduce the file size from 19MB to 15.7MB, representing a reduction of approximately 17% in file size. This reduction is significant in case of slow internet connection, limited bandwidth, or high traffic volume.

During the development process, I have also kept track on some issues and/or design faults that I have encountered via GitHub issue section and I have fixed them or replied to them accordingly. 

Here are some of the issues that I have encountered:

Closed issues:

![GitHub Issues](docIMG\closedissues.png)

[Link to GitHub Issues(Closed)](https://github.com/Armandas-b/U15A2_424556_Armandas_B/issues?q=is%3Aissue+is%3Aclosed)

Open issues:

![GitHub Issues](docIMG\openissues.png)

[Link to GitHub Issues(Open)](https://github.com/Armandas-b/U15A2_424556_Armandas_B/issues?q=is%3Aopen+is%3Aissue)

Due to time constraints, I was unable to address all the open issues on GitHub. Some remaining tasks and improvements may require further attention and implementation. However, despite these outstanding issues, the website is functional and meets the initial requirements and design goals.

These issues would be adressed in a future release of the website.