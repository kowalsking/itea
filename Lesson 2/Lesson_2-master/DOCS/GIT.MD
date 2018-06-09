https://git-scm.com/book/ru/v1 <- Full Book

git config --global user.name "Your User Name"
git config --global user.email "user@email.com"

git init — инициилизация нового репозитория;
git clone [url] — склонировать репозиторий;
git add . — добавить все новые файлы, или git add filename — добавить отдельный файл. Можно и git add folder_name — добавит папку;
git commit -m «Commit message»

git branch — вывести список всех веток репозитория, значек * будет стоять напротив текущего;
git branch [new-branch] — создать новую ветку new-branch;
git branch -D [old-branch] — удалить ветку old-branch;

git checkout [branch-name] - переключится на ветку branch-name
git push origin [branch-name]

git log
git reset --soft [commit hash] - откатить состояние на состояние коммита
git reset --hard [commit hash] - откатить состояние и все файлы на состояние коммита
