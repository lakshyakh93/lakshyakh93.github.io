// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "You are what you read !",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "post-conversational-bot-for-enterprise-apis-using-llm-agents-vectordb-and-gpt4",
      
        title: 'Conversational Bot for Enterprise APIs using LLM Agents, VectorDB and GPT4 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "A comprehensive guide on building conversational bots for enterprise APIs using LLM agents, vector databases, and GPT-4",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/walmartglobaltech/conversational-bot-for-enterprise-apis-using-llm-agents-vectordb-and-gpt4-168bfcb2be0d", "_blank");
        
      },
    },{id: "post-versioning-machine-learning-models",
      
        title: 'Versioning Machine Learning Models <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Best practices and strategies for versioning machine learning models in production environments",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@lakshaya.khandelwal/versioning-machine-learning-models-53c594bccd0d", "_blank");
        
      },
    },{id: "post-a-short-introduction-to-activation-functions",
      
        title: 'A Short Introduction to Activation Functions <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Understanding the role and importance of activation functions in neural networks",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@lakshaya.khandelwal/a-short-introduction-to-activation-functions-4394e6538bb3", "_blank");
        
      },
    },{id: "post-evaluation-metrics-for-recommendation-system",
      
        title: 'Evaluation metrics for Recommendation System <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Comprehensive guide to evaluating recommendation systems using various metrics and approaches",
      section: "Posts",
      handler: () => {
        
          window.open("https://lakshyakhandelwal.substack.com/p/evaluation-metrics-for-recommendation", "_blank");
        
      },
    },{id: "post-the-mighty-xgboost-2-0-is-here",
      
        title: "The Mighty XgBoost 2.0 is here",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/the-mighty-xgboost-2/";
        
      },
    },{id: "post-mean-reciprocal-rank",
      
        title: "Mean Reciprocal Rank",
      
      description: "Metric for search relevancy",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/mean-reciprocal-rank/";
        
      },
    },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%61%6B%73%68%61%79%61.%6B%68%61%6E%64%65%6C%77%61%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lakshyakh93", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lakshyakhandelwal", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
