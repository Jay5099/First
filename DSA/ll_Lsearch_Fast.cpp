#include<iostream>


using namespace std;

struct node{
    int data;
    struct node *next;
}*first=NULL;

void create(int A[],int n){
    int i;
    struct node *last,*t;

    first=new node;
    first->data=A[0];
    first->next=NULL;
    last=first;

    for(i=1;i<n;i++){
        t=new node ;
        t->data=A[i];
        t->next=NULL;
        last->next=t;
        last=t;
    }
}

struct node * Lsearch(struct node *p,int key){

    struct node *q; 
    q= new node;
    while (p!=NULL){
        if(key==p->data){
            q->next=p->next;
            p->next=first;
            first=p;
            return p;
        }
        q=p;
        p=p->next;
    }
    return NULL;
}

struct node *Rsearch(struct node *p,int key){
    if (p==NULL)
        return NULL;
    if(p->data==key)
        return p;
    return Rsearch(p->next,key); 
}

void display(struct node *p){
    while(p!=NULL){
        cout<<p->data<<" ";
        p=p->next;
    }
}

int main(){

    int A[]{23,45,47,12,98,71,123};
    create(A,7);
    display(first);

    struct node *temp,*temp1;
    temp=Lsearch(first,98);
    if (temp)
        cout<<"key is: "<<temp->data<<endl;
    else
        cout<<"Not found!"<<endl;

    display(first);  

    temp1=Rsearch(first,98);
    if (temp1)
        cout<<"key is: "<<temp1->data<<"(Recursively)"<<endl;
    else
        cout<<"Not found!"<<"(Recursively)"<<endl;
    return 0;
}